import axios from 'axios';
interface Post{
    id?:number;
    title:string;
    body:string;
    userId?:number;
}

const API='https://jsonplaceholder.typicode.com/posts';
const getPosts= ()=>axios.get<Post[]>(API);
const createPost= (p:Post) =>axios.post<Post>(API,p);
const updatePost =(id:number,p:Post)=>axios.put<Post>(`${API}/${id}`,p);
const deletePost = (id:number) => axios.delete(`${API}/${id}`);

function $<T extends HTMLElement>(selector:string):T{
    const el=document.querySelector(selector);
    if(!el) throw new Error(`Selector ${selector} not found`);
    return el as T;
}
const form=$('#post-form');
const titleInput=$('#title') as HTMLInputElement;
const bodyInput=$('#body') as HTMLTextAreaElement;
const cancelBtn=$('#cancel-edit');
const list=$('#post-list');

let posts:Post[]=[];
let editId:number |null=null;

async function init(){
    const res=await getPosts();
    posts = res.data.slice(0,10);
    render();
}
init();
async function render(){
    list.innerHTML='';
    posts.forEach(p=>{
        const li = document.createElement('li');
        li.innerHTML=`
            <h3>${p.title}</h3>
            <p>${p.body}</p>
            <button class="edit" data-id="${p.id}">Edit</button>
            <button class="del" data-id="${p.id}">Delete</button>
        `;
        list.appendChild(li);
    });
    list.querySelectorAll('.del').forEach(b=>b.addEventListener('click',onDelete));
    list.querySelectorAll('.edit').forEach(b=>b.addEventListener('click', onEdit));
}
async function onDelete(e:Event){
    const id=+((e.currentTarget as HTMLElement).dataset.id!);
    await deletePost(id);
    posts = posts.filter(p=>p.id !==id);
    render();
}
async function onEdit(e:Event){
    editId = +((e.currentTarget as HTMLElement).dataset.id!);
    const li = (e.currentTarget as HTMLElement).closest('li')!;
    titleInput.value = li.querySelector('h3')!.textContent || '';
    bodyInput.value = li.querySelector('p')!.textContent || '';
    cancelBtn.hidden=false;
}

cancelBtn.addEventListener('click',()=>{
    editId=null;
    form.reset();
    cancelBtn.hidden = true;
});

form.addEventListener('submit',async e=>{
    e.preventDefault();
    const post:Post={
        title:titleInput.value,
        body:bodyInput.value,
        userId:1
    };
    if(editId !==null){
        const res=await updatePost(editId,post);
        posts = posts.map(p=>p.id === editId ? res.data:p);
    }else{
        const res=await createPost(post);
        posts.unshift(res.data);
    }
    editId=null;
    form.reset();
    cancelBtn.hidden=true;
    render();
});
render();
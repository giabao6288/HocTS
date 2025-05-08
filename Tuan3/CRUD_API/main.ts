const postApi='https://jsonplaceholder.typicode.com/posts';
interface Post{
    id?:number;
    title:string;
    body:string;
}
const postList=document.getElementById('post-list') as HTMLElement;
const form = document.getElementById('post-form') as HTMLFormElement;
const titleInput = document.getElementById('title') as HTMLInputElement;
const bodyInput=document.getElementById('body') as HTMLTextAreaElement;

// GET all posts
async function getPosts(): Promise<void>{
    const res = await fetch(postApi);
    const posts:Post[]= await res.json();
    renderPosts(posts.slice(0,10));
}
function renderPosts(posts:Post[]):void{
    posts.forEach(post=>{
        const li = document.createElement('li');
        li.id=`post-${post.id}`;
        li.innerHTML=`
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <button onclick="deletePost(${post.id})">Delete</button>
            <button onclick='updatePost(${post.id},{title:"Update TItle",body:"Update Body"})'>Update</button>
        `;
        postList.appendChild(li);
    });
}
async function createPost(post:Post): Promise<void>{
    const res= await fetch(postApi,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(post)
    });
    const newPost=await res.json();
    renderPosts([newPost]);
}

async function deletePost(id:number): Promise<void>{
    await fetch(`${postApi}/${id}`,{
        method:'DELETE'
    });
    document.getElementById(`post-${id}`)?.remove();
}

// Update post
async function updatePost(id:number,post:Post):Promise<void>{
    const res=await fetch(`${postApi}/${id}`,{
        method:'PUT',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(post)
    });
    const updated=await res.json();
    alert(`Updated: ${updated.title}`);
}

// Form submit
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const title=titleInput.value.trim();
    const body = bodyInput.value.trim();
    if(title && body){
        createPost({title,body});
        titleInput.value='';
        bodyInput.value='';
    }
});
getPosts();
interface Task{
    id:number;
    title:string;
    completed:boolean;
}
const taskInput= document.getElementById("taskInput") as HTMLInputElement;
const addBtn= document.getElementById("addBtn") as HTMLButtonElement;
const taskList= document.getElementById("taskList") as HTMLUListElement;

let tasks:Task[]=[];
function renderTasks(){
    taskList.innerHTML=" ";
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent= task.title;
        li.className= task.completed ? "done":" ";
        li.onclick=()=>{
            task.completed=!task.completed;
            renderTasks();
        };
        const delBtn= document.createElement("button");
        delBtn.textContent ="❌";
        delBtn.onclick= (e)=>{
            e.stopPropagation();
            tasks=tasks.filter(t=>t.id !== task.id);
            renderTasks();
        };
        li.appendChild(delBtn);
        taskList.appendChild(li);
    });
}
addBtn.onclick = () =>{
    const title = taskInput.value.trim();
    if(title){
        tasks.push({id: Date.now(), title, completed: false});
        renderTasks();
    }
}
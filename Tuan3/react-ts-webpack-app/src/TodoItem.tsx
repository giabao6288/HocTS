import React, { useState } from 'react';
import {Todo} from './types';

interface Props{
    todo:Todo;
    onDelete:(id:number)=>void;
    onToggle:(id:number)=>void;
    onEdit:(id:number,newText:string)=>void;
}

const TodoItem:React.FC<Props>=({todo,onDelete,onToggle,onEdit})=>{
    const [isEditing, setIsEditing]= useState(false);
    const [editText,setEditText]=useState(todo.text);
    const handleEdit=()=>{
        if(isEditing){
            onEdit(todo.id,editText);
        }
        setIsEditing(!isEditing);
    }
    return(
        <li style={{margin:'8px 0'}}>
        <input
            type="checkbox"
            checked={todo.completed}
            onChange={()=>onToggle(todo.id)}
        />
        {isEditing ?(
            <input  
                value={editText}
                onChange={e=>setEditText(e.currentTarget.value)}
                style={{marginLeft:'10px'}}
            />
        ):(
            <span   
                style={{
                    marginLeft:'10px',
                    textDecoration:todo.completed ? 'line-through' :'none',
                }}
           >
            {todo.text}
            </span>
        )}
        <button onClick={handleEdit} style={{marginLeft:'10px'}}>{isEditing ?'Lưu' :'Sửa'}</button>
        <button onClick={() =>onDelete(todo.id)} style={{marginLeft:'10px'}}>Xóa</button>
    </li>
    );
};
   
export default TodoItem;
import React, { JSX, useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import { Todo } from './types';

function App(): JSX.Element {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [text, setText] = useState('');

    useEffect(()=>{
        const savedTodos=localStorage.getItem('todos');
        if(savedTodos){
            setTodos(JSON.parse(savedTodos));
        }
    },[]);
    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos));
    },[todos]);
    const addTodo = () => {
        if (text.trim() === '') return;

        const newTodo: Todo = {
        id: Date.now(),
        text,
        completed:false,
        };
        setTodos([...todos, newTodo]);
        setText('');
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    const togggleCompleted = (id:number)=>{
        setTodos(
            todos.map(todo=>
                todo.id==id?{...todo,completed: !todo.completed}:todo
            )
        );
    };
    const editTodo=(id:number, newText:string)=>{
        setTodos(
            todos.map(todo=>
                todo.id==id?{...todo,text:newText}:todo
            )
        );
    };
    return (
        <div style={{ padding: '20px' }}>
        <h1>Danh sách công việc</h1>
        <input
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Nhập công việc mới..."
        />
        <button onClick={addTodo} style={{ marginLeft: '10px' }}>Thêm</button>
        <ul>
            {todos.map(todo => (
            <TodoItem key={todo.id} 
            todo={todo}
            onDelete={deleteTodo} 
            onToggle={togggleCompleted}
            onEdit={editTodo}/>
            ))}
        </ul>
        </div>
    );
}

export default App;

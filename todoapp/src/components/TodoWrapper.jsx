import { TodoFrom } from "./TodoForm";
import {v4 as uuidv4} from 'uuid'
import { useState } from "react";
import { Todo } from "./Todo";
uuidv4()

export function TodoWrapper () {
    const [todos,setTodos] = useState([])

    const addTodo = title => {
        setTodos([{id:uuidv4(),title,completed:false,isEditing:false}])
        console.log([{id:uuidv4(),title,completed:false,isEditing:false}])
    }
return (
<div className="TodoWrapper">
    <h1>Get things done!</h1>
    <TodoFrom addTodo={addTodo}/>
    {todos.map((title,index) => (
        <Todo todo={title} key={index}/>
    ))}
</div>
)
}
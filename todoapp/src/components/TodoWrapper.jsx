import { TodoFrom } from "./TodoForm";
import {v4 as uuidv4} from 'uuid'
import { useState } from "react";
import { Todo } from "./Todo";
uuidv4()

export function TodoWrapper () {
    const [todos,setTodos] = useState([])

    const addTodo = todo => {
        setTodos([...todos,{id:uuidv4(),task:todo,completed:false,isEditing:false}])
        console.log(todos)
    }
return (
<div className="TodoWrapper">
    <h1>Get things done!</h1>
    <TodoFrom addTodo={addTodo}/>
    {todos.map((todo,index) => (
        <Todo task={todo} key={index}/>
    ))}
</div>
)
}
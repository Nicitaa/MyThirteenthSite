import { useState } from "react";
import { TodoFrom } from "./TodoForm";
import { Todo } from "./Todo";
import {v4 as uuidv4} from 'uuid'
uuidv4()

export function TodoWrapper () {
    const [todos,setTodos] = useState([])

    function addTodo(title) {
        setTodos([{id:uuidv4(),title,completed:false,isEditing:false}])
        console.log([{id:uuidv4(),title,completed:false,isEditing:false}])
    }
    function toggleComplete(id) {
        setTodos(todos.map(todo => todo.id ===id ? {...todo,completed:!todo.completed} : todo))
    }
    function deleteTodo(id) {
        setTodos(todos.filter(todo => todo.id !==id))
    }
return (
<div className="TodoWrapper">
    <TodoFrom addTodo={addTodo}/>
    {todos.map((title,index) => {
        return <Todo todo={title} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
    })}
</div>
)
}
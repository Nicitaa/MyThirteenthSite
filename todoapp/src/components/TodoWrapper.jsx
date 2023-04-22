import { useState } from "react";
import { TodoFrom } from "./TodoForm";
import { Todo } from "./Todo";

export function TodoWrapper () {
    const [todos,setTodos] = useState([])

    function addTodo(title) {
        setTodos([{title,coompleted:false,isEditing:false}])
        console.log([{title,coompleted:false,isEditing:false}])
    }
return (
<div className="TodoWrapper">
    <TodoFrom addTodo={addTodo}/>
    {todos.map((title,index) => {
        return <Todo todo={title} key={index} />
    })}
</div>
)
}
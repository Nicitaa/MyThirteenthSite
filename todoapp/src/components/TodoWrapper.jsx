import { useState } from "react";
import { TodoFrom } from "./TodoForm";
import { Todo } from "./Todo";
import {v4 as uuidv4} from 'uuid'
import { EditTodoFrom } from "./EditTodoForm";
uuidv4()

export function TodoWrapper () {
    const [todos,setTodos] = useState([])

    function addTodo(title) {
        setTodos(todo =>[...todo,{id:uuidv4(),title,completed:false,isEditing:false}])
        console.log(todo =>[...todo,{id:uuidv4(),title,completed:false,isEditing:false}])
    }
    function toggleComplete(id) {
        setTodos(todos.map(todo => todo.id ===id ? {...todo,completed:!todo.completed} : todo))
    }
    function deleteTodo(id) {
        setTodos(todos.filter(todo => todo.id !==id))
    }
    function showEditFrom(id) {
        setTodos(todos.map(todo => todo.id ===id ? {...todo,isEditing:!todo.isEditing}:todo))
    }
    function editTodo(title,id) {
        setTodos(todos.map(todo => todo.id ===id ? {...todo,title,isEditing:!todo.isEditing}:todo))
        console.log(todos.map(todo => todo.id ===id ? {...todo,title,isEditing:!todo.isEditing}:todo))
    }
return (
<div className="TodoWrapper">
    <TodoFrom addTodo={addTodo}/>
    {todos.map((title,index) => {
        return title.isEditing ? <EditTodoFrom editTodo={editTodo} todo={title} key={index}/> :
        <Todo todo={title} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo}
        showEditFrom={showEditFrom} />
    })}
</div>
)
}
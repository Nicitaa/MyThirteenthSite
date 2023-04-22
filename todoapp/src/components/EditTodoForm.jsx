import { useState } from "react"

export function EditTodoFrom ({editTodo,todo}) {
    const [inputValue,setInputValue] = useState(todo.title)

    const handleSubmit = e => {
        e.preventDefault();
        editTodo(inputValue,todo.id)
        setInputValue('')
    }
    
    return (
    <form className="TodoFrom" onSubmit={handleSubmit}>
        <input value={inputValue} onChange={e => setInputValue(e.target.value)} className="todo-input"
        placeholder="What is changing today?" />
        <button className="todo-btn" type="submit">Edit task</button>
    </form>
    )
}
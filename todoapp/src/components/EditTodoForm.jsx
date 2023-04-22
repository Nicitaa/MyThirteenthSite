import { useState } from "react"

export function EditTodoFrom ({editTodo,todo}) {
    const [value,setValue] = useState(todo.title)

    const handleSubmit = e => {
        e.preventDefault();
        editTodo(value,todo.id)

        setValue('')
    }
    
    return (
    <form className="TodoFrom" onSubmit={handleSubmit}>
        <input value={value} onChange={e => setValue(e.target.value)} className="todo-input"
        placeholder="Edit todo" />
        <button className="todo-btn" type="submit">Edit</button>
    </form>
    )
    }
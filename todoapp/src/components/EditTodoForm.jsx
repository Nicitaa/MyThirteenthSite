import { useState } from "react"

export function EditTodoFrom ({editTodo,task}) {
    const [value,setValue] = useState(task.task)

    const handleSubmit = e => {
        e.preventDefault();
        editTodo(value,task.id)

        setValue('')
    }
    
    return (
    <form className="TodoFrom" onSubmit={handleSubmit}>
        <input value={value} onChange={e => setValue(e.target.value)} className="todo-input"
        placeholder="Update task" />
        <button className="todo-btn" type="submit">Update task</button>
    </form>
    )
    }
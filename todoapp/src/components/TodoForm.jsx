import { useState } from "react"

export function TodoFrom () {
    const [value,setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        
    }
    
    return (
    <form className="TodoFrom" onSubmit={handleSubmit}>
        <input value={value} onChange={e => setValue(e.target.value)} className="todo-input" placeholder="what is the task today?" />
        <button className="todo-btn" type="submit">Add task</button>
    </form>
    )
    }
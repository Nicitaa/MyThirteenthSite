import { useState } from "react"

export function TodoFrom ({addTodo}) {
    const [inputValue,setInputValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(inputValue)
        setInputValue('')
    }
    
    return (
    <form className="TodoFrom" onSubmit={handleSubmit}>
        <input value={inputValue} onChange={e => setInputValue(e.target.value)} className="todo-input"
        placeholder="What is the task today?" />
        <button className="todo-btn" type="submit">Add task</button>
    </form>
    )
    }
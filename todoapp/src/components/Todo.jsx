import { useState } from "react"
const Todo = ({desc,done}) => {

    const [isDone,setIsDone] = useState(done)
    const changeTodo = () => { 
        setIsDone(isDone ? false : true) 
    }
    return (
      <div className={isDone ? 'd-flex justify-between items-center p-2 border-b-2 shadow-md bg-green-500' :
      'd-flex justify-between items-center p-2 shadow-md border-b-2 bg-red-500'}>
        <div className="flex justify-between items-center p-2">
            <h1 className="text-lg cursor-pointer" onClick={changeTodo}>{desc}</h1>
            <button className="text-lg bg-gray-400 p-2 text-white">Loschen</button>
        </div>
        </div>
    )
}

export default Todo
import { useState } from "react"
import TodoList from "./components/TodoList"
import Todo from "./components/Todo"

const todos = [
  {description:'Einkaufen',done:true},
  {description:'Sport',done:false},
  {description:'Programmieren',done:false}
]

function App() {
  return (
    <>
    <h1>Unsere todos</h1>
    <Todo/>
    <Todo/>
    <Todo/>
    </>
  )
}

export default App

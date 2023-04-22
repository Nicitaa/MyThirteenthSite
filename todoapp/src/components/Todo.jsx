import { faPenSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Todo ({todo,toggleComplete,deleteTodo,showEdit}) {
    return (
    <div className="Todo">
        <p className={`${todo.completed ? 'completed' : ''}`} onClick={() => toggleComplete(todo.id)}>{todo.title}</p>
        <div>
            <FontAwesomeIcon icon={faPenSquare} onClick={() => showEdit(todo.id)}/>
            <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(todo.id)}/>
        </div>
    </div>
    )
    }
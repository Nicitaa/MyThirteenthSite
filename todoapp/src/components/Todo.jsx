import { faPenSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Todo ({todo}) {
    return (
    <div className="Todo">
        <p>{todo.title}</p>
        <div>
            <FontAwesomeIcon icon={faPenSquare}/>
            <FontAwesomeIcon icon={faTrash}/>
        </div>
    </div>
    )
    }
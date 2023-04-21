import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Todo ({todo}) {
    return (
    <div className="Todo">
        <p>{todo.title}</p>
        <div>
            <FontAwesomeIcon icon={faPenToSquare}/>
            <FontAwesomeIcon icon={faTrash}/>
        </div>
    </div>
    )
    }
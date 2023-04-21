import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Todo ({task}) {
    return (
    <div className="Todo">
        <p>{task.task}</p>
        <div>
            <FontAwesomeIcon icon={faPenToSquare}/>
            <FontAwesomeIcon icon={faTrash}/>
        </div>
    </div>
    )
    }
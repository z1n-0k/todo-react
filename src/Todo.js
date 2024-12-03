import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';


const Todo = ({todo, todos, setTodos}) => {

    const setCompletion = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    };

    const deleteTodo = () => {
        setTodos(todos.filter((e1) => e1.id !== todo.id));
    };

    return (  
        <div className="todo">
            <li className="todo-item">
                {todo.text}
            </li>
            <button className="todo-button-check" onClick={setCompletion}><FontAwesomeIcon icon={faCheck} /></button>
            <button className="todo-button-delete" onClick={deleteTodo}><FontAwesomeIcon icon={faTrash} /></button>
        </div>
    );
}
 
export default Todo;
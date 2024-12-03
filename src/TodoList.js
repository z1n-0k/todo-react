import Todo from "./Todo";
const TodoList = ({todos,setTodos}) => {

    return (  
        <div className="todo-container">
            <ul className="todo-list">
                {
                    todos.map((todo) => {
                        return <Todo todos={todos} todo={todo} setTodos={setTodos} key={todo.id} />
                    })
                }
            </ul>
        </div>
    );
}
 
export default TodoList;
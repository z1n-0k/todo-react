const Form = ({todoInput, setTodoInput,todos,setTodos}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {
                id: todos ? todos.length + 1 : 1,
                text: todoInput, 
                completed: false
            }
            
        ])
        setTodoInput("")
    }

    return (
        <form action=""  onSubmit={handleSubmit}>
            
            <input 
                required
                type="text" 
                value={todoInput}
                className="todo-input" 
                onChange={(e) => {
                    setTodoInput(e.target.value);
                }}/>

            <button className="todo-button">
                Add
            </button>

            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="incomplete">Incomplete</option>
                </select>
            </div>

        </form>
      );
}
 
export default Form;
const Form = (
    {
        todoInput, setTodoInput,
        todos, setTodos, 
        setFilterStatus,
        id, setId
    }) => {

    const filterStatusHandler = (e) => {
        setFilterStatus(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {
                id: id,
                text: todoInput, 
                completed: false
            }
        ])
        setTodoInput("")
        setId(id+1)
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

            <div className="select" onChange={filterStatusHandler}>
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Complete</option>
                    <option value="incomplete">Incomplete</option>
                </select>
            </div>

        </form>
      );
}
 
export default Form;
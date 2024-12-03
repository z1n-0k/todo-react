import Todo from "./Todo";
const TodoList = ({todos}) => {

    return (  
        <div className="todo-container">
            <ul className="todo-list">
                <Todo />
            </ul>
        </div>
    );
}
 
export default TodoList;


// <div className="blog-list">
// <h2>{ title }</h2>
// {
//     blogs.map((blog) => {
//         return(
//             <div className="blog-preview" key={blog.id}>
//                 <Link to = {`/blogs/${blog.id}`}>
//                     <h2>{blog.title}</h2>
//                     <p>Written by: {blog.author}</p>
//                 </Link>
//             </div>
//         )    
//     })
// }
// </div>
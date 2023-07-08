import "./Todo.css";

const Todo = ({title, isComplete, deleteTodo}) => {
    return (
        <div className="todo-item">
            <h4>{title}</h4>

            <div className="action-holder">
                <input type="checkbox" checked={isComplete}/>

                <button onClick={deleteTodo}>Delete</button>

            </div>
        </div>
    )
}

export default Todo;
import Todo from "./Todo/Todo"

const TodoList = ({todos, deleteTodo}) => {
    return (
        <div className="todo-container">
            {
                (todos.length === 0)?<h2>No todo to Show....</h2> : ""
            }
            {
                todos.map(({id, title, isComplete}, index)=> <Todo key={{id}} title={title} isComplete={isComplete} deleteTodo={()=>deleteTodo(id)}/>)
            }
        </div>
    )
}

export default TodoList;
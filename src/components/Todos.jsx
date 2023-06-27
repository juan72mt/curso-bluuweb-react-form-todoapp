import Todo from './Todo'
const Todos = ({ todos, deleteTodo, updateTodo }) => {
    return (
        <>
            <h2 className="text-center my-5">TODOs</h2>
            <ul className="list-group">
                {todos.length === 0 && (
                    <li className="list-group-item text-center">
                        No hay registros de Todo's
                    </li>
                )}
                {todos.map((todo) => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        deleteTodo={deleteTodo}
                        updateTodo={updateTodo}
                    />
                ))}
            </ul>
        </>
    )
}
export default Todos

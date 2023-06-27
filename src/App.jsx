import Formulario from './components/Formulario'
import Todos from './components/Todos'
import { useEffect, useState } from 'react'

const initialTodos = localStorage.getItem('todos')
    ? JSON.parse(localStorage.getItem('todos'))
    : []

const App = () => {
    const [todos, setTodos] = useState(initialTodos)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    const addTodo = (todo) => {
        setTodos([...todos, todo])
    }
    const deleteTodo = (id) => {
        const newArray = todos.filter((todo) => todo.id !== id)
        setTodos(newArray)
    }
    const updateTodo = (id) => {
        const newArray = todos.map((todo) => {
            if (todo.id === id) {
                todo.state = !todo.state
            }
            return todo
        })
        setTodos(newArray)
    }
    const orderTodos = (arrayTodos) => {
        return arrayTodos.sort((a, b) => {
            if (a.priority === b.priority) return 0
            if (a.priority) return -1
            if (!a.priority) return 1
        })
    }
    return (
        <div className="container">
            <h1>Formularios</h1>
            <Formulario addTodo={addTodo} />
            <Todos
                todos={orderTodos(todos)}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
            />
        </div>
    )
}

export default App

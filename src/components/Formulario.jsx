import { useState } from 'react'
import Swal from 'sweetalert2'
const Formulario = ({ addTodo }) => {
    const [todo, setTodo] = useState({
        id: '',
        title: '',
        description: '',
        state: 'completado',
        priority: false,
    })
    const { title, description, state, priority } = todo

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title.trim() || !description.trim()) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Título y Descripción obligatorios!',
            })
        }

        addTodo({
            ...todo,
            id: Date.now(),
            state: state === 'completado',
        })

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'La Tarea ha sido agregada exitosamente',
            showConfirmButton: false,
            timer: 1500,
        })
    }

    const handleOnChange = (e) => {
        const { type, name, value, checked } = e.target
        setTodo({
            ...todo,
            [name]: type === 'checkbox' ? checked : value,
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Ingrese Todo"
                className="form-control mb-4"
                name="title"
                onChange={handleOnChange}
                // onChange={(e) =>
                //     // setTodo((previo) => ({
                //     //     ...previo,
                //     //     title: e.target.value,
                //     // }))
                //     setTodo({
                //         ...todo,
                //         title: e.target.value,
                //     })
                // }
                value={title}
            />
            <textarea
                className="form-control mb-4"
                placeholder="Ingrese Desripción"
                name="description"
                onChange={handleOnChange}
                value={description}
            />
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    name="priority"
                    id="priority"
                    checked={priority}
                    onChange={handleOnChange}
                />
                <label className="form-check-label" htmlFor="priority">
                    Dar Prioridad
                </label>
            </div>
            <select
                className="form-select mb-4"
                name="state"
                onChange={handleOnChange}
                value={state}
            >
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>
            <button className="btn btn-success" type="submit">
                Agregar Todo
            </button>
        </form>
    )
}

export default Formulario

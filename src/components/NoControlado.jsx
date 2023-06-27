import { useRef, useState } from 'react'

const NoControlado = () => {
    const form = useRef(null)
    const [errors, setErrors] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors([])
        const data = new FormData(form.current)
        const { title, description, state } = Object.fromEntries([
            ...data.entries(),
        ])
        let error = []
        // validar los datos
        if (!title.trim()) {
            error['name'] = 'llene el siguiente campo:'
        }
        if (!description.trim()) {
            error['description'] = 'llene el siguiente campo:'
        }
        setErrors(error)
        // enviar los datos
    }

    return (
        <form onSubmit={handleSubmit} ref={form}>
            {errors['name'] !== '' && (
                <div className="alert alert-danger mb-2">{errors['name']}</div>
            )}
            <input
                type="text"
                placeholder="Ingrese Todo"
                className="form-control mb-4"
                name="title"
            />
            {errors['description'] !== '' && (
                <div className="alert alert-danger mb-2">
                    {errors['description']}
                </div>
            )}
            <textarea
                className="form-control mb-4"
                placeholder="Ingrese Desripción"
                name="description"
            />
            <select
                className="form-select mb-4"
                defaultValue="pendiente"
                name="state"
            >
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>
            <button className="btn btn-success" type="submit">
                Procesar
            </button>
        </form>
    )
}

export default NoControlado

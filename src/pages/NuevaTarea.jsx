import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTareas } from '../context/TareasContext';

function NuevaTarea() {
const [form, setForm] = useState({
    titulo: '',
    materia: '',
    fecha: '',
});

const { agregarTarea } = useTareas();
const navigate = useNavigate();

function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
}

function handleSubmit(e) {
    e.preventDefault();
    agregarTarea(form);
    navigate('/');
}

return (
    <section>
    <h2>Nueva tarea</h2>

    <form onSubmit={handleSubmit}>
        <input
        type="text"
        name="titulo"
        placeholder="Título"
        value={form.titulo}
        onChange={handleChange}
        />

        <input
        type="text"
        name="materia"
        placeholder="Materia"
        value={form.materia}
        onChange={handleChange}
        />

        <input
        type="date"
        name="fecha"
        value={form.fecha}
        onChange={handleChange}
        />

        <button type="submit">Guardar tarea</button>
    </form>
    </section>
);
}

export default NuevaTarea;
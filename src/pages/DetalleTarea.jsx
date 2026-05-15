import { useNavigate, useParams } from "react-router-dom";
import { useTareas } from "../context/TareasContext";

function DetalleTarea() {
const { id } = useParams();
const navigate = useNavigate();
const { tareas, eliminarTarea } = useTareas();

const tarea = tareas.find((t) => t.id === Number(id));

if (!tarea) {
    return <h2>Tarea no encontrada</h2>;
}

function handleEliminar() {
    eliminarTarea(tarea.id);
    navigate("/");
}

return (
    <section>
    <h2>Detalle de tarea</h2>
    <h3>{tarea.titulo}</h3>
    <p>Materia: {tarea.materia}</p>
    <p>Fecha: {tarea.fecha}</p>
    <p>Estado: {tarea.completada ? "Completada" : "Pendiente"}</p>

    <button onClick={handleEliminar}>Eliminar</button>
    </section>
);
}

export default DetalleTarea;
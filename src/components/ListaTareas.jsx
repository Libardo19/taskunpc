import TareaCard from "./TareaCard";
import { tareasIniciales } from "../data/tareas";

function listaTareas() {
  return (
    <section>
      {tareasIniciales.map((tarea) => (
        <TareaCard key={tarea.id} {...tarea} />
      ))}
    </section>
  );
}
export default listaTareas;

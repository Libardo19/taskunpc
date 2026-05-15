import TareaCard from "./TareaCard";

function ListaTareas({ tareas }) {
  return (
    <section>
      {tareas.map((tarea) => (
        <TareaCard key={tarea.id} {...tarea} />
      ))}
    </section>
  );
}

export default ListaTareas;
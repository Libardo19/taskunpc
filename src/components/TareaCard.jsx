import { useTareas } from '../context/TareasContext';

function TareaCard({ id, titulo, materia, fecha, completada }) {
  const { toggleTarea } = useTareas();

  return (
    <article style={{ opacity: completada ? 0.6 : 1 }}>
      <h3 style={{ textDecoration: completada ? 'line-through' : 'none' }}>
        {titulo}
      </h3>

      <p style={{ textDecoration: completada ? 'line-through' : 'none' }}>
        {materia} - {fecha}
      </p>

      <span>{completada ? 'Hecho' : 'Pendiente'}</span>

      <input
        type="checkbox"
        checked={completada}
        onChange={() => toggleTarea(id)}
      />
    </article>
  );
}

export default TareaCard;
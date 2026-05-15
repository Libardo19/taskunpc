function TareaCard({ titulo, materia, fecha, completada }) {
  return (
    <article>
      <h3>{titulo}</h3>
      <p>
        {materia} . {fecha}{" "}
      </p>
      <span> {completada ? "Hecho" : "Pendiente"}</span>
    </article>
  );
}
export default TareaCard;

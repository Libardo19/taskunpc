import Header from "./components/Header";
import ListaTareas from "./components/ListaTareas";
import { tareasIniciales} from "./data/tareas";

function App() {
  const pendientes = tareasIniciales.filter( (tarea) => !tarea.completada).length;
  return (
    <div> 
      <Header pendientes={pendientes}/>
      <ListaTareas/>
    </div>
  );
}
export default App;


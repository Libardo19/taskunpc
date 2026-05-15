import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ListaTareas from "./components/ListaTareas";
import NuevaTarea from "./pages/NuevaTarea";
import DetalleTarea from "./pages/DetalleTarea";
import { useTareas } from "./context/TareasContext";

function App() {
  const { tareas } = useTareas();
  const [filtro, setFiltro] = useState("todas");

  const pendientes = tareas.filter((tarea) => !tarea.completada).length;

  const tareasFiltradas = tareas.filter((tarea) => {
    if (filtro === "pendientes") return !tarea.completada;
    if (filtro === "completadas") return tarea.completada;
    return true;
  });

  return (
    <BrowserRouter>
      <Header pendientes={pendientes} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div>
                <button onClick={() => setFiltro("todas")}>Todas</button>
                <button onClick={() => setFiltro("pendientes")}>Pendientes</button>
                <button onClick={() => setFiltro("completadas")}>Completadas</button>
              </div>

              <ListaTareas tareas={tareasFiltradas} />
            </>
          }
        />

        <Route path="/nueva" element={<NuevaTarea />} />
        <Route path="/tarea/:id" element={<DetalleTarea />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
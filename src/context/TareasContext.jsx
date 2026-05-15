/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react';
import { tareasIniciales } from '../data/tareas';

export const TareasContext = createContext();

export function TareasProvider({ children }) {
const [tareas, setTareas] = useState(() => {
    const tareasGuardadas = localStorage.getItem('tareas');

    if (tareasGuardadas) {
    return JSON.parse(tareasGuardadas);
    }

    return tareasIniciales;
});

function agregarTarea(nuevaTarea) {
    setTareas((prev) => [
    ...prev,
    {
        id: Date.now(),
        ...nuevaTarea,
        completada: false,
    },
    ]);
}

function toggleTarea(id) {
    setTareas((prev) =>
    prev.map((t) =>
        t.id === id ? { ...t, completada: !t.completada } : t
    )
    );
}

useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
}, [tareas]);

return (
    <TareasContext.Provider value={{ tareas, agregarTarea, toggleTarea }}>
    {children}
    </TareasContext.Provider>
);
}

export function useTareas() {
return useContext(TareasContext);
}
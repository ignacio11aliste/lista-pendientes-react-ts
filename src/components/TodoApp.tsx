import { useState } from "react";
import { ListaTarea } from "./ListaTarea";

export const TodoApp = () => {
  const [nuevaTarea, setNuevaTarea] = useState<string>("");
  const [listaTarea, setListaTarea] = useState<string[]>([]);

  const handleAddTaks = () => {
    if (nuevaTarea.trim() === "") return;
    setListaTarea((tareaAnteriores) => [...tareaAnteriores, nuevaTarea]);
    setNuevaTarea("");
  };

  const handleBorrarTarea = (index: number) => {
    setListaTarea((tareas) => tareas.filter((_, i) => i != index));
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <div>
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="nueva tarea"
        />
        <button onClick={handleAddTaks}>Agregar Tarea</button>
      </div>
      <ListaTarea
        listaTareas={listaTarea}
        borrarTarea={handleBorrarTarea}
      ></ListaTarea>
    </div>
  );
};

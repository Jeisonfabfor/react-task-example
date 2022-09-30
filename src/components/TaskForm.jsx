import { useState, useContext } from "react";
import { TaskContext } from '../context/TaskContext'

function TaskForm() {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const { createTask } = useContext(TaskContext)
    

    const handleSubmit = (event) => {
        event.preventDefault();
        createTask({
            name,
            description
        })
        setName('')
        setDescription('')
        }
      
       

  return (

    <div className="max-w-md mx-auto">
      <form className="bg-slate-800 p-10 mb-4" onSubmit={ handleSubmit}>
        <h1 className="text-2xl font-bold text-white mb-3" > Crea tu tarea </h1>
      <input className="bg -slate-300 p-3 w w-full mb-2" placeholder="Escribe tu tarea"
      onChange={(event) =>  setName(event.target.value)} 
      value={name}
      autoFocus
      />

      <textarea className="bg -slate-300 p-3 w w-full mb-2" placeholder="Escribe la descripcion de tu tarea"
      onChange={event => setDescription(event.target.value)}
      value={description}
      >

      </textarea>
      <button className="bg-indigo-500 px-3 py-1 text-white rounded-md  hover:bg-indigo-300">guardar</button>
    </form>
    </div>

    
  );
}

export default TaskForm



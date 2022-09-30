import { createContext, useState, useEffect } from 'react'
import { tasks as data } from "../data/task";


export const TaskContext = createContext()

export function TaskContextProvider (props) {
  
  // arreglo principal de tareas, se puede consumir desde cualquier componente
  const [tasks, setTasks] = useState([]);

  //funcion crear tareas
  function createTask(task) {
    setTasks( [...tasks, {
      name: task.name,
      id: tasks.length,
      description: task.description
    }] ) 
    }

    //funcion eliminar tareas
    function deleteTask(taskId) {
        setTasks (tasks.filter( task => task.id !== taskId ))
    }

        // establece los datos
        useEffect(() => {
            setTasks(data);
          }, []);


    return (
        <TaskContext.Provider value={{
            tasks: tasks,   // arreglo princiapl
            createTask : createTask, //funcion crear tareas
            deleteTask : deleteTask  //funcion eliminar tareas
        }}>
        {props.children}
      </TaskContext.Provider>
    )   

}
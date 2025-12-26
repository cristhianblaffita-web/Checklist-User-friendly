import React, {useState} from "react"
import "./ChecklistApp.css"
import TasksForm from "../TasksForm/TasksForm.jsx"
import TasksList from "../TasksList/TasksList.jsx"

const ChecklistApp = () => {
  const [itemsTasksList, setItemsTasksList] = useState([])
  
  const addTask = (item) => {
    setItemsTasksList([...itemsTasksList, item])
  }
    
  const removeTask = (id) => {
    setItemsTasksList((prevTasks) => prevTasks.filter((task) => task.id !==
        id))
  }
    
  
  return (
    <div className="checklist-app-container">
      <TasksForm addFunc={addTask}/>
      <TasksList tasks={itemsTasksList} removeFunc={removeTask}/>
    </div>  
  )
}

export default ChecklistApp

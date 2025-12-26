import React, {useState} from "react"
import "./ChecklistApp.css"
import TasksForm from "../TasksForm/TasksForm.jsx"
import TasksList from "../TasksList/TasksList.jsx"

/*
The main Checklist App component, is the master parent where all children
components (TasksForm, TasksList) that conform the app will be deployed
*/

const ChecklistApp = () => {
  const [itemsTasksList, setItemsTasksList] = useState([]) //This hook store all task added into the tasklist
  
  const addTask = (item) => { //This function updates the state variable that store all tasks in the tasklist
    setItemsTasksList([...itemsTasksList, item]) //Updating the state variable
  }
    
  const removeTask = (id) => { //This function remove an especific task or element from the tasklist using the element id as parameter
    setItemsTasksList((prevTasks) => prevTasks.filter((task) => task.id !==
        id)) //Removing the task or element from the tasklist
  }
    
  
  return (
    <div className="checklist-app-container"> 
      <TasksForm addFunc={addTask}/>
      <TasksList tasks={itemsTasksList} removeFunc={removeTask}/>
    </div>  
  )
}

export default ChecklistApp

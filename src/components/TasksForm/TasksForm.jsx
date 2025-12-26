import React, {useState}  from "react"
import "./TasksForm.css"

/*
The Task Form component is the formulary that serves as User Interface for adding any task into the Tasklist component. It needs a function for adding one task at a time that might be passed as a prop ('addFunc')
*/

const TasksForm = ({addFunc}) => {
  const [taskInputVal, setTaskInputVal] = useState("") // Hook that store the value of the formulary input
  
  const [trackId, setTrackId] = useState(0) // Hook that manage the ID of each task or element
  
  const handleInputVal = (event) => { // This function perform the updating of the value of the formulary input
    setTaskInputVal(event.target.value) // Updating the value of the input
  }
  
  const handleAddTask = (e) => { // This function handle the whole workflow to adding a new task element
    e.preventDefault() // Avoiding a website page unecessary
    if (taskInputVal.trim().length > 0){ // Avoiding any empty task

      setTrackId((trackId) => trackId + 1) // Making a new ID for the new task
    
      let newItem = ({  // This object store the fundamental information about the task element
        id: trackId, // Uniqe ID of the task element
        state: false, // State: checked(true) or pending(false)
        content: taskInputVal // Inner content of the task element
      })
      
      addFunc(newItem) // Calling the function passed as prop. These fuction is who perform the real procces of adding a task element into the tasklist
      setTaskInputVal("") // Reseating the value of the input 
    }
}
  
  return (
    <form className="tasks-form" onSubmit={handleAddTask}>
      <fieldset className="tasks-input-container">
        <input className="tasks-input" type="text" value={taskInputVal}
        onChange={handleInputVal} placeholder="Write some task here..." maxLength={50} required />
      </fieldset>
      <button className="add-task-btn" type="submit">
        <div className="add-task-icon"></div>
        <p>Add</p>
      </button>
    </form>  
  )
}

export default TasksForm
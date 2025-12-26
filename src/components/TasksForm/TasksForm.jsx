import React, {useState}  from "react"
import "./TasksForm.css"

const TasksForm = ({addFunc}) => {
  const [taskInputVal, setTaskInputVal] = useState("")
  
  const [trackId, setTrackId] = useState(0)
  
  const handleInputVal = (event) => {
    setTaskInputVal(event.target.value)
  }
  
  const handleAddTask = (e) => {
    e.preventDefault()
    if (taskInputVal.trim().length > 0){

      setTrackId((trackId) => trackId + 1)
    
      let newItem = ({
        id: trackId,
        state: false,
        content: taskInputVal
      })
      
      addFunc(newItem)
      setTaskInputVal("")
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
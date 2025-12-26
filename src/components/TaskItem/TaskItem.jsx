import React, {useState} from "react"
import "./TaskItem.css"

/*
The Task Item component represents each task in an user-friendly way, with features like check and uncheck task, and removing task. It recieves the task content of the element, a function that handle the task removing proccess, and the ID of the Task Item, all of them as props
*/

const TaskItem = ({taskContent = "", removeFunc, selfId}) => {
  const [checkState, setCheckState] = useState(false) // Hook that store the state of the Task Item 
  
  const [aparience, setAparience] = useState("pending") // Hook that manage the aparience of the Task Item based in the className property using ('checked') for checked state and ('pending') for not checked state
  
  const [existency, setExistency] = useState("existent") // Hook that manage the existence of each Task Item
  
  const handleCheckbox = (event) => { // This function handle state and aparience of the Task Item
    setCheckState(!checkState) // Changing current state
    
    !checkState ? setAparience("checked") : setAparience("pending") // Changing current aparience
  }
  
  const handleRemove = () => { // This function handle the whole proccess of removing a task element
    existency==="existent" ? setExistency("removed") : setExistency(existency) // Updating the existency state of the task element
  
    setTimeout(() => {removeFunc(selfId)}, 250) // Calling the function that truely removes the task element after a timer to avoid any bug
  }
  
  return (
    <div className={`task-item ${aparience} ${existency}`}>
      <div className="task-checkbox-container">
        <input className="task-checkbox" type="checkbox" value={checkState}
        onChange={handleCheckbox} />
      </div>
      <div className="task-content-container">
        <p className="task-content">{taskContent}</p>
      </div>
      <button className="remove-task-btn" type="button" onClick={handleRemove}></button> 
    </div>  
  )
}

export default TaskItem
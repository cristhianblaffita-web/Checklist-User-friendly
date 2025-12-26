import React, {useState} from "react"
import "./TaskItem.css"

const TaskItem = ({taskContent = "", removeFunc, selfId}) => {
  const [checkState, setCheckState] = useState(false)
  
  const [aparience, setAparience] = useState("pending")
  
  const [existency, setExistency] = useState("existent")
  
  const handleCheckbox = (event) => {
    setCheckState(!checkState)
    
    !checkState ? setAparience("checked") : setAparience("pending")
  }
  
  const handleRemove = () => {
    existency==="existent" ? setExistency("removed") : setExistency(existency)
    
    setTimeout(() => {removeFunc(selfId)}, 250)
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
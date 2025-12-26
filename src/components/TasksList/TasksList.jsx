import React, {useState} from "react"
import "./TasksList.css"
import TaskItem from "../TaskItem/TaskItem.jsx"

const TasksList = ({tasks, removeFunc}) => {
  return (
    <div className="tasks-list">
      {tasks.length > 0 ? tasks.map((task, index) => ( 
        <TaskItem 
          key={task.id} 
          taskContent={task.content} 
          selfId={task.id} 
          removeFunc={removeFunc}/>)
        ) : <p className="empty-list-message">Add some tasks here...</p>}
    </div>  
  )
}

export default TasksList

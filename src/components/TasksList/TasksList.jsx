import React, {useState} from "react"
import "./TasksList.css"
import TaskItem from "../TaskItem/TaskItem.jsx"

/*
The Tasklist component is the 'fisical' checklist where all Task Item component will be added and displayed as children componenets. It recieves all the task elements (an array that contains some objects representing all the task elements) and the function that allows deleting each task element, both of them as props
*/

const TasksList = ({tasks, removeFunc}) => {
  /*
  To deploying all the task elements into the Tasklist component, first we mapping over the the array provided as prop and then we use the information to build each TaskItem component. 
  */
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

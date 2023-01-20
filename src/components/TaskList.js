import React from "react";
import Task from "./Task";

function TaskList({tasks, deletedTask}) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task,index)=>(
        <Task 
          key={index}
          category={task.category}
          text={task.text}
          deletedTask={deletedTask}
         />
      ))}
    </div>
  );
}

export default TaskList;

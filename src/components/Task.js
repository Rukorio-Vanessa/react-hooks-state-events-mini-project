import React from "react";

function Task({category, text, deletedTask}) {

  const handleClick = function(){
    deletedTask(text)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Task;

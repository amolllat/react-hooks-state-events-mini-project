import React from "react";

function Task({deleteTasks, text, category}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => deleteTasks(text)}>X</button>
    </div>
  );
}

export default Task;

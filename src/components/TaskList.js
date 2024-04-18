import React from "react";
import Task from "./Task";

function TaskList({tasks ,deleteTasks}) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
				<Task
					key={task.text}
					text={task.text}
					category={task.category}
					deleteTasks={deleteTasks}
        />
      ))}
    </div>
  );
}

export default TaskList;

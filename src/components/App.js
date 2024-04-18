import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);

	const deleteTasks = (task) => {
		let newTasks = tasks.filter((t) => t.text !== task);
		setTasks(newTasks);
	};
	const filterTasks = (CATEGORIES) => {
		if (CATEGORIES === "All") {
			setTasks(TASKS);
		} else {
			let newTasks = TASKS.filter((t) => t.category === CATEGORIES);
			setTasks(newTasks);
		}
	};
	const onTaskFormSubmit = (newTask) => {
		setTasks([...tasks, newTask]);
	};
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES}
				filterTasks={filterTasks}/>
      <NewTaskForm categories={CATEGORIES}
				onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasks} deleteTasks={deleteTasks} />
    </div>
  );
}

export default App;

import React,{useState} from "react";

function NewTaskForm({ onTaskFormSubmit, categories: categoryList }) {
  const [category, setCategory] = useState("");
	const [details, setDetails] = useState("");
  const newTasks= () => {
		let newTask = [...categoryList];
		newTask.shift();
		return newTask;
	};

  return (
    <form className="new-task-form" onSubmit={(event) => {
      event.preventDefault();
      if (details === "" || category === "") {
        alert("Please fill out all fields");
      } else {
        onTaskFormSubmit({ text: details, category });
        setDetails("");
        setCategory("");
      }}}>

      <label>
        Details
        <input type="text" name="text" value={details}
					onChange={(event) => setDetails(event.target.value)} 
        />
      </label>
      <label>
        Category
        <select name="category" value={category}
					onChange={(event) => setCategory(event.target.value)}>
          {/* render <option> elements for each category here */}
          {newTasks().map((c) => (
						<option key={c}>{c}</option>
					))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

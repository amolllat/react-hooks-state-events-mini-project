import React, {useState} from "react";
import { CATEGORIES } from "../data";

function CategoryFilter({ categories: category, filterTasks }) {
  const [active, setActive] = useState("All");
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/*<button> elements for each category*/}
      {category.map((categorytask) => (
				<button
					className={categorytask === active ? "selected" : ""}
					key={categorytask}
					onClick={() => {
						filterTasks(categorytask);
						setActive(categorytask);
					}}
				>
					{categorytask}
				</button>
      ))}
    </div>
  );
}

export default CategoryFilter;

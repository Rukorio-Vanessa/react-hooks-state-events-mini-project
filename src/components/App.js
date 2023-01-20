import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const filterCategory = function(category){
    if (category === "All") {
      return setTasks(TASKS);
    }
    const addedTask = TASKS.filter((task) => task.category === category);
    setTasks(addedTask);
  };
  const handleDeletingTask = function(id) {
    setTasks((tasks) => {
      return tasks.filter((task, index) => index !== id)
      
    })
  }
  const handleAddingTask = (task) => {setTasks((tasks)=>[...tasks,task])}
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        onFilteredCategory={filterCategory} 
        categories={CATEGORIES} 
      />
      <NewTaskForm 
        onTaskFormSubmit={handleAddingTask} 
        categories={CATEGORIES} />
      <TaskList
        tasks={tasks}
        onDelete={handleDeletingTask} />
    </div>
  );
}

export default App;

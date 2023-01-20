import React, {useState} from "react";

function NewTaskForm({onTaskFormSubmit, categories}) {

  //set state for text category and text
  const [category, setCategory] = useState("Code")
  const [text, setText] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    onTaskFormSubmit({category, text})

  }

  const handleCategory = (e) => { setCategory(e.target.value)}

  const handleText = (e) => {setText(e.target.value)}


  const newCategories = categories.slice(1);


  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleText} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleCategory}>

          {/* render <option> elements for each category here */}
          {newCategories.map((category, index) => {
            return <option key={index}>
              {category}</option>
          })}

        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

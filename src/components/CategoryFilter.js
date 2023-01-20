import React, {useState} from "react";

function CategoryFilter({categories, onFilteredCategory}) {
  
  const [selected, setSelected] = useState(0);

  const filterBtn = categories.map((category, index) => 
    <button key={category} className={selected === index ? "selected" : ""}
    onClick={() => {onFilteredCategory (category) 
      setSelected(index)}}>
        {category}
    </button>)
 
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {filterBtn}
    </div>
  );
}

export default CategoryFilter;

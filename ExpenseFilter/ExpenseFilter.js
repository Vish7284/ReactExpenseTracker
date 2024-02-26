import React from "react";
import './ExpenseFilter.css';


const ExpenseFilter = (props)=> {
  const dropDownChangeHandler =(event) => {
    props.onChangefilter(event.target.value);
  }

return (
    <div className="expense-filter">
     <div className="expense-filter__control">
        <label>Filter By Year</label>
        <select value={props.selected} onChange={dropDownChangeHandler}>
            <option value= "2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
        </select>
     </div>
    </div>
)

}


export default ExpenseFilter;
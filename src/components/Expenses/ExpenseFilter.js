// Challenge, get data on change in years, set state, up these data into parent component Expense.js

// 1. Create Component

import React, { useState } from "react";

import "./ExpenseFilter.css";

const ExpensesFilter = (props) => {
  //2. Create state
  const [enteredYear, setEnteredYear] = useState("");

  //4. Create Function that sets State
  const dropdownHandler = (event) => {
    const yearChangeData = event.target.value;
    setEnteredYear(yearChangeData);

    // 7. Use getted props to up data to parent component to Expense.js
    props.onChangeFilter(yearChangeData);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        {/* 3. Handle Data onChange */}
        {/* Also uses default data that came from props */}
        <select value={props.selected} onChange={dropdownHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

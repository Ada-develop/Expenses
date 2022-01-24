import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";

const Expenses = (props) => {
  //8. Create state to save getted data
  const [enteredYear, setEnteredYear] = useState("");

  // 5. Create Function that carry data from child component
  const saveFilterDataHandler = (data) => {
    //9. put into state
    setEnteredYear(data);
    console.log(data);
  };

  return (
    <div>
      {/* 6. Pass this function through props */}
      <ExpensesFilter onSaveFilterData={saveFilterDataHandler} />
      <Card className="expenses">
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;

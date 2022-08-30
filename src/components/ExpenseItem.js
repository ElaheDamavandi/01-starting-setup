import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate.js";
import Card from "./Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  
  // const [title, setTitle] = useState(props.title);

  // const pff = () => {
  //   setTitle("Update!!");
  // };

  return (
    <div>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button>ChangeButton</button>
      </Card>
    </div>
  );
}

export default ExpenseItem;

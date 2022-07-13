import "./styles/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

type expense = { id: string; title: string; amount: number; date: Date };

const ExpeseItem = (props: { expense: expense }) => {
  const [title, setTitle] = useState(props.expense.title);
  const clickHandler = () => setTitle("Updated");

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expense.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.expense.amount}€</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpeseItem;

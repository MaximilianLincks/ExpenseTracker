import "./styles/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";


type expense = { id: string; title: string; amount: number; date: Date };

function ExpeseItem(props: { expense: expense }) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expense.date} />
      <div className="expense-item__description">
        <h2>{props.expense.title}</h2>
        <div className="expense-item__price">{props.expense.amount}€</div>
      </div>
    </Card>
  );
}

export default ExpeseItem;

import "./styles/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

type expense = { id: string; title: string; amount: number; date: Date };

function ExpeseItem(props: { expense: expense }) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.expense.date} />
      <div className="expense-item__description">
        <h2>{props.expense.title}</h2>
        <div className="expense-item__price">{props.expense.amount}€</div>
      </div>
    </div>
  );
}

export default ExpeseItem;

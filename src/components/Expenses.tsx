import expenses from "../data/expenses";
import ExpeseItem from "./ExpenseItem";

import "./styles/Expenses.css"

function Expenses() {
  return (
    <div className="expenses">
      {expenses.map((exp) => (
        <ExpeseItem expense={exp} />
      ))}
    </div>
  );
}
export default Expenses;

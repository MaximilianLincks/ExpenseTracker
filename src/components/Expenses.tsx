import expenses from "../data/expenses";
import Card from "./Card";
import ExpeseItem from "./ExpenseItem";

import "./styles/Expenses.css"

function Expenses() {
  return (
    <Card className="expenses">
      {expenses.map((exp) => (
        <ExpeseItem expense={exp} />
      ))}
    </Card>
  );
}
export default Expenses;

import expenses from "../../data/expenses";
import Card from "../UI/Card";
import ExpeseItem from "./ExpenseItem";

import "./styles/Expenses.css";

const Expenses = () => {
  return (
    <Card className="expenses">
      {expenses.map((exp) => (
        <ExpeseItem key={exp.id} expense={exp} />
      ))}
    </Card>
  );
};
export default Expenses;

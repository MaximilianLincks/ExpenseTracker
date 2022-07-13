
import { enrichedExpense } from "../NewExpense/NewExpense";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

import "./styles/Expenses.css";

const Expenses = (props: {expenses: enrichedExpense[]}) => {
  return (
    <Card className="expenses">
      {props.expenses.map((exp) => (
        <ExpenseItem key={exp.id} expense={exp} />
      ))}
    </Card>
  );
};
export default Expenses;

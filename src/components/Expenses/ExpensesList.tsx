import { enrichedExpense } from "../NewExpense/NewExpense";
import ExpenseItem from "./ExpenseItem";
import "./styles/ExpensesList.css";

const ExpensesList = (props: { items: enrichedExpense[] }) => {
  if (props.items.length === 0)
    return <h2 className="expenses-list__fallback">No expenses found</h2>;

  return (
    <ul className="expenses-List" style={{ listStyle: "none" }}>
      {props.items.map((exp) => (
        <ExpenseItem key={exp.id} expense={exp} />
      ))}
    </ul>
  );
};

export default ExpensesList;

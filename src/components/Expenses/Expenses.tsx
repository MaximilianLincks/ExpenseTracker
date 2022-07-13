import { useState } from "react";
import { enrichedExpense } from "../NewExpense/NewExpense";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";

import "./styles/Expenses.css";

const Expenses = (props: { items: enrichedExpense[] }) => {
  const [filterValue, setFilterValue] = useState("2020");

  const onFilterChangeHandler: (
    e: React.FormEvent<HTMLSelectElement>
  ) => void = (e) => {
    setFilterValue(e.currentTarget.value);
    console.log(e.currentTarget.value);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterValue}
        onFilterChange={onFilterChangeHandler}
      />
      {props.items.map((exp) => (
        <ExpenseItem key={exp.id} expense={exp} />
      ))}
    </Card>
  );
};
export default Expenses;

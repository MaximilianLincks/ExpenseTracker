import { useState } from "react";
import { enrichedExpense } from "../NewExpense/NewExpense";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import arrayRange from "../../utility/ArrayRange";

import "./styles/Expenses.css";


const Expenses = (props: { items: enrichedExpense[] }) => {

  let years = props.items.map(exp => exp.date.getFullYear());
  
  let minYears = Math.min(...years);
  let maxYears = Math.max(...years);

  let available = years.length > 0 
    ? (arrayRange(minYears,(n:number) => n+1,maxYears-minYears+1)).map((n:number) => n.toString()) 
    : [];


  const [filterValue, setFilterValue] = useState(years.length > 0 ? maxYears.toString() : new Date().getFullYear().toString());

  const onFilterChangeHandler: (
    e: React.FormEvent<HTMLSelectElement>
  ) => void = (e) => {
    setFilterValue(e.currentTarget.value);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        available={available}
        selected={filterValue}
        onFilterChange={onFilterChangeHandler}
      />
      {props.items
      .filter((exp) => exp.date.getFullYear().toString() === filterValue)
      .map((exp) => (
        <ExpenseItem key={exp.id} expense={exp} />
      ))}
    </Card>
  );
};
export default Expenses;


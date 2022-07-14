import { useState } from "react";
import { enrichedExpense } from "../NewExpense/NewExpense";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import arrayRange from "../../utility/ArrayRange";

import "./styles/Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props: { items: enrichedExpense[] }) => {
  const years = props.items.map((exp) => exp.date.getFullYear());

  const minYears = Math.min(...years);
  const maxYears = Math.max(...years);

  //conatians all Years between min(years) and max(years)
  const availableYears =
    years.length > 0
      ? arrayRange(minYears, (n: number) => n + 1, maxYears - minYears + 1).map(
          (n: number) => n.toString()
        )
      : [];

  const [filterValue, setFilterValue] = useState(
    years.length > 0 ? maxYears.toString() : new Date().getFullYear().toString()
  );

  const filteredExpenses = props.items.filter(
    (exp) => exp.date.getFullYear().toString() === filterValue
  );

  const onFilterChangeHandler: (
    e: React.FormEvent<HTMLSelectElement>
  ) => void = (e) => {
    setFilterValue(e.currentTarget.value);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        available={availableYears}
        selected={filterValue}
        onFilterChange={onFilterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};
export default Expenses;

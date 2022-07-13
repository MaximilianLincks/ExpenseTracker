import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense, { enrichedExpense } from "./components/NewExpense/NewExpense";
import defaultExpenses from "./data/expenses";

const App = () => {
  const [expenses,setExpenses] = useState(defaultExpenses);
  
  const addExpenseHandler: (expenseData: enrichedExpense) => void = (data) => {
    setExpenses((prev) => [...prev,data]);
  };

  return (
    <>
      <Expenses items={expenses}/>

      <NewExpense onAddExpense={addExpenseHandler} />
    </>
  );
};

export default App;

import Expenses from "./components/Expenses/Expenses";
import NewExpense, { enrichedExpense } from "./components/NewExpense/NewExpense";
import expenses from "./data/expenses";

const App = () => {
  const addExpenseHandler: (expenseData: enrichedExpense) => void = (data) => {};

  return (
    <>
      <Expenses expenses={expenses}/>
      <NewExpense onAddExpense={addExpenseHandler} />
    </>
  );
};

export default App;

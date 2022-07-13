import ExpeseItem from "./components/ExpenseItem";
import expenses from "./data/expenses";

function App() {
  return (
    <>
      <h2>Let's get started!</h2>
      {expenses.map(expense => <ExpeseItem expense={expense} />)}
    </>
  );
}

export default App;

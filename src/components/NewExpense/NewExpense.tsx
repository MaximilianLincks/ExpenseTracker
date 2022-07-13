import "./styles/NewExpense.css";
import ExpenseForm, { expenseData } from "./ExpenseFrom";

export type enrichedExpense = {
  id: string;
  title: string;
  amount: string;
  date: Date;
};

const NewExpense = (props: {
  onAddExpense: (data: enrichedExpense) => void;
}) => {
  const onSaveExpanseDataHandler = (data: expenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...data,
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpanseDataHandler} />
    </div>
  );
};

export default NewExpense;

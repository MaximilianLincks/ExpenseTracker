import { useState } from "react";
import "./styles/ExpenseForm.css";

export type expenseData = {
  title: string;
  amount: string;
  date: Date;
};

const ExpenseForm = (props: {
  onSaveExpenseData: (data: expenseData) => void;
}) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [showForm, setShowForm] = useState(false);

  const titleChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setEnteredTitle(e.currentTarget.value);
  };

  const amountChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setEnteredAmount(e.currentTarget.value);
  };

  const dateChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setEnteredDate(e.currentTarget.value);
  };

  const cancelHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    setShowForm(false);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (showForm) {
      const expenseData: expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate),
      };

      setEnteredTitle("");
      setEnteredAmount("");
      setEnteredDate("");

      props.onSaveExpenseData(expenseData);
    } else {
      setShowForm(true);
    }
  };

  const InputFields = () => {
    if (showForm) {
      return (
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount [€]</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="date"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
      );
    }
    return <></>;
  };

  const CancelButton = () => {
    if (showForm) {
      return (
        <button type="submit" onClick={cancelHandler}>
          Cancel
        </button>
      );
    }
    return <></>;
  };

  return (
    <form onSubmit={submitHandler}>
      {InputFields()}
      <div className="new-expense__action">
        <button type="submit">Add Expense</button>
        {CancelButton()}
      </div>
    </form>
  );
};

export default ExpenseForm;

import "./styles/ExpenseFilter.css";

const ExpensesFilter = (props: {
  onFilterChange: (e: React.FormEvent<HTMLSelectElement>) => void;
  selected: string;
  available: string[];
}) => {
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={props.onFilterChange} value={props.selected}>
            {props.available.map(year => <option value={year} key={year}>{year}</option>)}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

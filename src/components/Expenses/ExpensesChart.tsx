import Chart, { dataPoint } from "../Chart/Chart";
import { enrichedExpense } from "../NewExpense/NewExpense";

const ExpensesChart = (props: { expenses: enrichedExpense[] }) => {
  const chartDataPoints: dataPoint[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ].map((month) => {
    return { label: month, value: 0 };
  });

  props.expenses.forEach(
    (expense) =>
      (chartDataPoints[expense.date.getMonth()].value += parseFloat(
        expense.amount
      ))
  );

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;

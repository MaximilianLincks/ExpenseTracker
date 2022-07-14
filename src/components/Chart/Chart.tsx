import ChartBar from "./ChartBar";
import "./styles/Chart.css";

export type dataPoint = { value: number; label: string };

const Chart = (props: { dataPoints: dataPoint[] }) => {
  const maxValue = Math.max(
    0,
    ...props.dataPoints.map((dataPoint: dataPoint) => dataPoint.value)
  );

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint: dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;

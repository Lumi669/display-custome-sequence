import React from "react";
import { Bar } from "react-chartjs-2";

function BarChart() {
  return (
    <div>
      <Bar
        data={{
          labels: ["red", "blue", "yellow", "green", "purple", "orange"],
        }}
        height={400}
        width={600}
      />
    </div>
  );
}

export default BarChart;

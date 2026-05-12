import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { getCoinGraph } from "../../api/coinsApi";
import { formatCurrency, formatTimestamp } from "../../utils/formatters";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
);

const CoinGraph = () => {
  const [chartData, setChartData] = useState([]);
  const [days, setDays] = useState(7);

  const { id } = useParams();

  const labels = chartData.map((item) => formatTimestamp(item[0], days));
  const values = chartData.map((item) => item[1]);

  const isUp = values[0] < values[values.length - 1];
  const chartColor = isUp ? "#22c55e" : "#ef4444";

  useEffect(
    function () {
      async function fetchGraph() {
        const data = await getCoinGraph(id, days);
        setChartData(data.prices);
      }

      fetchGraph();
    },
    [id, days],
  );

  const timeframes = [
    { label: "1D", value: 1 },
    { label: "7D", value: 7 },
    { label: "1M", value: 30 },
    { label: "3M", value: 90 },
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: values,
        borderColor: chartColor,
        tension: 0.1,
        fill: "start",
        backgroundColor: isUp
          ? "rgba(34, 197, 94, 0.1)"
          : "rgba(239, 68, 68, 0.1)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: { display: false },
        border: { display: false },
        ticks: {
          maxTicksLimit: 5,
          autoSkip: true,
          maxRotation: 0,
          color: "rgba(255, 255, 255, 0.5)",
        },
      },
      y: {
        position: "right",
        grid: { color: "rgba(255, 255, 255, 0.05)" },
        border: { display: false },
        grace: "5%",
        ticks: {
          callback: (value) => formatCurrency(value, true),
          maxTicksLimit: 5,
          color: "rgba(255, 255, 255, 0.5)",
          padding: 8,
        },
      },
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 10,
        bottom: 0,
      },
    },
    elements: {
      point: { radius: 0 },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => `Price: ${formatCurrency(context.raw)}`,
        },
      },
    },
  };

  return (
    <div className="coin-page__block coin-graph">
      <div className="coin-graph__header">
        {timeframes.map((tf) => (
          <button
            key={tf.label}
            className={`coin-graph__tab ${days === tf.value ? "active" : ""}`}
            onClick={() => setDays(tf.value)}
          >
            {tf.label}
          </button>
        ))}
      </div>

      <div className="coin-graph__chart">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default CoinGraph;

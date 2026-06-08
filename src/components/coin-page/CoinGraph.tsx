import { useState } from "react";
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
  ChartOptions,
} from "chart.js";
import { useQuery } from "@tanstack/react-query";
import Loader from "../ui/Loader";
import { CurrencyCode } from "../../constants";

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

interface CoinGraphProps {
  currency: CurrencyCode;
}

const CoinGraph = ({ currency }: CoinGraphProps) => {
  const [days, setDays] = useState<number>(7);

  const { id } = useParams();

  if (!id) return null;

  const {
    data: graphData,
    isPending,
    error,
  } = useQuery({
    queryKey: ["coinGraph", id, days, currency],
    queryFn: () => getCoinGraph(id, days, currency),
    staleTime: 1000 * 60 * 3,
  });

  const prices = graphData?.prices || [];

  const labels = prices.map((item) => formatTimestamp(item[0], days));
  const values = prices.map((item) => item[1]);

  const isUp = values[0] < values[values.length - 1];
  const chartColor = isUp ? "#22c55e" : "#ef4444";

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

  const options: ChartOptions<"line"> = {
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
          callback: (value: string | number) =>
            formatCurrency(Number(value), currency, true),
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
          label: (context) =>
            `Price: ${formatCurrency(Number(context.raw), currency)}`,
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
            disabled={isPending}
          >
            {tf.label}
          </button>
        ))}
      </div>

      <div className="coin-graph__chart">
        {isPending ? (
          <Loader />
        ) : error ? (
          <p className="error-message">{error.message}</p>
        ) : (
          <Line data={data} options={options} />
        )}
      </div>
    </div>
  );
};

export default CoinGraph;

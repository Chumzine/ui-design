import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { BarChartData } from "./BarChartData";
import ArrowDownLogo from "/assets/icons/Icons.svg";
import style from "./bar.module.css";
import { useRef } from "react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const BarChart = () => {
    const chartRef = useRef(null);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: true,
                max: 400,
                ticks: {
                    stepSize: 100,
                },
                grid: {
                    display: false,
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return (
        <div className={style['chart-container']}>
            <div className={style.flex}>
                <h5>Activity</h5>
                <div className={style['drop-down']}>
                    <h5>Month</h5>
                    <img src={ArrowDownLogo} alt="Drop Down Icon" />
                </div>
            </div>
            <Bar ref={chartRef} options={options} data={BarChartData} />
        </div>
    )
}
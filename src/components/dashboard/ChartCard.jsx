import React from 'react';
import { Line, Bar, Pie, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register the necessary chart components with ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const ChartCard = () => {
  // Sample data for the charts
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales 2024',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: '#42A5F5',
        tension: 0.1,
      },
    ],
  };

  const barChartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const pieData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div className="container mt-4 p-4 shadow bg-light rounded-3">
      <h2 className="mb-4 text-center text-dark">Chart Card</h2>

      <div className="row">
        {/* Line Chart Card */}
        <div className="col-lg-6 col-sm-12 mb-4">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">Line Chart</h5>
              <Line data={chartData} height={300} />
            </div>
          </div>
        </div>

        {/* Bar Chart Card */}
        <div className="col-lg-6 col-sm-12 mb-4">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">Bar Chart</h5>
              <Bar data={barChartData} height={300} />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Pie Chart Card */}
        <div className="col-lg-6 col-sm-12 mb-4">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">Pie Chart</h5>
              <Pie data={pieData} height={300} />
            </div>
          </div>
        </div>

        {/* Doughnut Chart Card */}
        <div className="col-lg-6 col-sm-12 mb-4">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">Doughnut Chart</h5>
              <Doughnut data={pieData} height={300} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartCard;

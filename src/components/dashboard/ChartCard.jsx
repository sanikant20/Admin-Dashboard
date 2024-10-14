import React from 'react';

const ChartCard = () => {
  return (
    <>
      <div className="container mt-4 p-4 shadow bg-light rounded-3">
        <h2 className="mb-4 text-center text-dark">Chart Card</h2>

        <div className="row">
          {/* Line Chart Card */}
          <div className="col-lg-6 col-sm-12 mb-4">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">Line Chart</h5>
                <canvas id="lineChart" style={{ height: '300px' }}></canvas>
              </div>
            </div>
          </div>

          {/* Bar Chart Card */}
          <div className="col-lg-6 col-sm-12 mb-4">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">Bar Chart</h5>
                <canvas id="barChart" style={{ height: '300px' }}></canvas>
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
                <canvas id="pieChart" style={{ height: '300px' }}></canvas>
              </div>
            </div>
          </div>

          {/* Doughnut Chart Card */}
          <div className="col-lg-6 col-sm-12 mb-4">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">Doughnut Chart</h5>
                <canvas id="doughnutChart" style={{ height: '300px' }}></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartCard;

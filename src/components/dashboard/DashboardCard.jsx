import React from "react";
import TotalCards from "./TotalCards";
import ChartCard from "./ChartCard";

const DashboardCard = () => {
  return (
    <div className="container p-4 shadow bg-dark text-white rounded-3">
      <h1 className="mb-4">Dashboard</h1>
      <div className="row justify-content-center align-items-center">
        <TotalCards />
        <ChartCard />
      </div>
    </div>
  );
};

export default DashboardCard;

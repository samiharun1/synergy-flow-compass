
import { useState } from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DailyCheckIn from "@/components/dashboard/DailyCheckIn";
import TodaysFocus from "@/components/dashboard/TodaysFocus";
import QuickShortcuts from "@/components/dashboard/QuickShortcuts";
import TeamPulse from "@/components/dashboard/TeamPulse";
import "@/components/dashboard/Dashboard.css";

const Dashboard = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="dashboard-container">
      <DashboardHeader formattedDate={formattedDate} />

      <div className="dashboard-grid">
        <DailyCheckIn />
        <TodaysFocus />
      </div>

      <div className="dashboard-full-width">
        <QuickShortcuts />
      </div>

      <div className="dashboard-full-width">
        <TeamPulse />
      </div>
    </div>
  );
};

export default Dashboard;

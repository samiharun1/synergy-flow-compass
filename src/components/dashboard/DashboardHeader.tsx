
import { Button } from "@/components/ui/button";
import "./DashboardHeader.css";

interface DashboardHeaderProps {
  formattedDate: string;
}

const DashboardHeader = ({ formattedDate }: DashboardHeaderProps) => {
  return (
    <div className="dashboard-header">
      <div>
        <h1 className="dashboard-title">Dashboard</h1>
        <p className="dashboard-date">{formattedDate}</p>
      </div>
      <div className="dashboard-actions">
        <Button>Add Task</Button>
      </div>
    </div>
  );
};

export default DashboardHeader;

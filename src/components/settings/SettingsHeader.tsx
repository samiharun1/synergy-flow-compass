
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import "./SettingsHeader.css";

const SettingsHeader = () => {
  return (
    <div className="settings-header">
      <div className="settings-header-title">
        <h1 className="settings-title">Settings</h1>
        <p className="settings-subtitle">Customize your experience</p>
      </div>
      <Button variant="outline" className="settings-logout-button">
        <LogOut className="settings-logout-icon" />
        Logout
      </Button>
    </div>
  );
};

export default SettingsHeader;

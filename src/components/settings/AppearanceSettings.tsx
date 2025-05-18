
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Grid3X3, ListChecks } from "lucide-react";
import "./AppearanceSettings.css";

const AppearanceSettings = () => {
  const [themeMode, setThemeMode] = useState("light");
  const [goalsView, setGoalsView] = useState("list");
  
  return (
    <Card className="appearance-card">
      <CardHeader className="appearance-card-header">
        <CardTitle className="appearance-card-title">Appearance Settings</CardTitle>
        <CardDescription className="appearance-card-description">Customize the look and feel</CardDescription>
      </CardHeader>
      <CardContent className="appearance-card-content">
        <div className="appearance-section">
          <h3 className="appearance-section-title">Theme</h3>
          <div className="appearance-theme-options">
            <div 
              className={`appearance-theme-option ${themeMode === "light" ? "appearance-theme-option-selected" : ""}`}
              onClick={() => setThemeMode("light")}
            >
              <div className="appearance-theme-preview appearance-theme-light"></div>
              <span className="appearance-theme-label">Light</span>
            </div>
            <div 
              className={`appearance-theme-option ${themeMode === "dark" ? "appearance-theme-option-selected" : ""}`}
              onClick={() => setThemeMode("dark")}
            >
              <div className="appearance-theme-preview appearance-theme-dark"></div>
              <span className="appearance-theme-label">Dark</span>
            </div>
            <div 
              className={`appearance-theme-option ${themeMode === "system" ? "appearance-theme-option-selected" : ""}`}
              onClick={() => setThemeMode("system")}
            >
              <div className="appearance-theme-preview appearance-theme-system"></div>
              <span className="appearance-theme-label">System</span>
            </div>
          </div>
        </div>
        
        <div className="appearance-section">
          <h3 className="appearance-section-title">Goals View</h3>
          <div className="appearance-goals-options">
            <div 
              className={`appearance-goals-option ${goalsView === "list" ? "appearance-goals-option-selected" : ""}`}
              onClick={() => setGoalsView("list")}
            >
              <ListChecks className="appearance-goals-icon" />
              <span className="appearance-goals-label">List View</span>
            </div>
            <div 
              className={`appearance-goals-option ${goalsView === "grid" ? "appearance-goals-option-selected" : ""}`}
              onClick={() => setGoalsView("grid")}
            >
              <Grid3X3 className="appearance-goals-icon" />
              <span className="appearance-goals-label">Grid View</span>
            </div>
          </div>
        </div>
        
        <div className="appearance-section">
          <h3 className="appearance-section-title">Accent Color</h3>
          <div className="appearance-colors">
            <div className="appearance-color appearance-color-blue appearance-color-selected"></div>
            <div className="appearance-color appearance-color-purple"></div>
            <div className="appearance-color appearance-color-green"></div>
            <div className="appearance-color appearance-color-amber"></div>
            <div className="appearance-color appearance-color-red"></div>
          </div>
        </div>
        
        <div className="appearance-actions">
          <Button className="appearance-save-button">Save Preferences</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AppearanceSettings;

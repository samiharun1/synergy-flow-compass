
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Grid3X3, ListChecks } from "lucide-react";

const AppearanceSettings = () => {
  const [themeMode, setThemeMode] = useState("light");
  const [goalsView, setGoalsView] = useState("list");
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Appearance Settings</CardTitle>
        <CardDescription>Customize the look and feel</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Theme</h3>
          <div className="flex flex-wrap gap-4">
            <div 
              className={`
                flex cursor-pointer flex-col items-center gap-2 rounded-md border p-4 hover:border-synergy-primary
                ${themeMode === "light" ? "border-synergy-primary bg-blue-50" : ""}
              `}
              onClick={() => setThemeMode("light")}
            >
              <div className="h-16 w-24 rounded-md bg-white shadow-sm"></div>
              <span className="text-sm">Light</span>
            </div>
            <div 
              className={`
                flex cursor-pointer flex-col items-center gap-2 rounded-md border p-4 hover:border-synergy-primary
                ${themeMode === "dark" ? "border-synergy-primary bg-blue-50" : ""}
              `}
              onClick={() => setThemeMode("dark")}
            >
              <div className="h-16 w-24 rounded-md bg-gray-800 shadow-sm"></div>
              <span className="text-sm">Dark</span>
            </div>
            <div 
              className={`
                flex cursor-pointer flex-col items-center gap-2 rounded-md border p-4 hover:border-synergy-primary
                ${themeMode === "system" ? "border-synergy-primary bg-blue-50" : ""}
              `}
              onClick={() => setThemeMode("system")}
            >
              <div className="h-16 w-24 rounded-md bg-gradient-to-r from-white to-gray-800 shadow-sm"></div>
              <span className="text-sm">System</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Goals View</h3>
          <div className="flex flex-wrap gap-4">
            <div 
              className={`
                flex cursor-pointer flex-col items-center gap-2 rounded-md border p-4 hover:border-synergy-primary
                ${goalsView === "list" ? "border-synergy-primary bg-blue-50" : ""}
              `}
              onClick={() => setGoalsView("list")}
            >
              <ListChecks className="h-10 w-10 text-gray-500" />
              <span className="text-sm">List View</span>
            </div>
            <div 
              className={`
                flex cursor-pointer flex-col items-center gap-2 rounded-md border p-4 hover:border-synergy-primary
                ${goalsView === "grid" ? "border-synergy-primary bg-blue-50" : ""}
              `}
              onClick={() => setGoalsView("grid")}
            >
              <Grid3X3 className="h-10 w-10 text-gray-500" />
              <span className="text-sm">Grid View</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Accent Color</h3>
          <div className="flex flex-wrap gap-4">
            <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-blue-500 ring-2 ring-blue-500 ring-offset-2">
            </div>
            <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-purple-500">
            </div>
            <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-green-500">
            </div>
            <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-amber-500">
            </div>
            <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-red-500">
            </div>
          </div>
        </div>
        
        <div className="flex justify-end">
          <Button>Save Preferences</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AppearanceSettings;

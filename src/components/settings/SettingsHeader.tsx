
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

const SettingsHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-gray-500">Customize your experience</p>
      </div>
      <Button variant="outline" className="gap-2 text-red-500 hover:bg-red-50 hover:text-red-600">
        <LogOut className="h-4 w-4" />
        Logout
      </Button>
    </div>
  );
};

export default SettingsHeader;

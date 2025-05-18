
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell } from "lucide-react";

const NotificationSettings = () => {
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    taskReminders: true,
    teamUpdates: true,
    dailyDigest: false,
  });
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Settings</CardTitle>
        <CardDescription>Manage your notification preferences</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="emailNotifications" className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-gray-500" />
              <span>Email Notifications</span>
            </Label>
            <Switch
              id="emailNotifications"
              checked={notificationSettings.emailNotifications}
              onCheckedChange={(checked) => 
                setNotificationSettings(prev => ({ ...prev, emailNotifications: checked }))
              }
            />
          </div>
          
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="taskReminders" className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-gray-500" />
              <span>Task Reminders</span>
            </Label>
            <Switch
              id="taskReminders"
              checked={notificationSettings.taskReminders}
              onCheckedChange={(checked) => 
                setNotificationSettings(prev => ({ ...prev, taskReminders: checked }))
              }
            />
          </div>
          
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="teamUpdates" className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-gray-500" />
              <span>Team Updates</span>
            </Label>
            <Switch
              id="teamUpdates"
              checked={notificationSettings.teamUpdates}
              onCheckedChange={(checked) => 
                setNotificationSettings(prev => ({ ...prev, teamUpdates: checked }))
              }
            />
          </div>
          
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="dailyDigest" className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-gray-500" />
              <span>Daily Digest</span>
            </Label>
            <Switch
              id="dailyDigest"
              checked={notificationSettings.dailyDigest}
              onCheckedChange={(checked) => 
                setNotificationSettings(prev => ({ ...prev, dailyDigest: checked }))
              }
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="notificationTime">Daily Notification Time</Label>
          <Select defaultValue="9">
            <SelectTrigger>
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="8">8:00 AM</SelectItem>
              <SelectItem value="9">9:00 AM</SelectItem>
              <SelectItem value="10">10:00 AM</SelectItem>
              <SelectItem value="11">11:00 AM</SelectItem>
              <SelectItem value="12">12:00 PM</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex justify-end">
          <Button>Save Notification Settings</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationSettings;

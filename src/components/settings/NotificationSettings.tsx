
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell } from "lucide-react";
import "./NotificationSettings.css";

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
        <CardTitle className="notification-card-title">Notification Settings</CardTitle>
        <CardDescription className="notification-card-description">Manage your notification preferences</CardDescription>
      </CardHeader>
      <CardContent className="notification-card-content">
        <div className="notification-options">
          <div className="notification-option">
            <Label htmlFor="emailNotifications" className="notification-option-label">
              <Bell className="notification-option-icon" />
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
          
          <div className="notification-option">
            <Label htmlFor="taskReminders" className="notification-option-label">
              <Bell className="notification-option-icon" />
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
          
          <div className="notification-option">
            <Label htmlFor="teamUpdates" className="notification-option-label">
              <Bell className="notification-option-icon" />
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
          
          <div className="notification-option">
            <Label htmlFor="dailyDigest" className="notification-option-label">
              <Bell className="notification-option-icon" />
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
        
        <div className="notification-time-group">
          <Label htmlFor="notificationTime" className="notification-time-label">Daily Notification Time</Label>
          <Select defaultValue="9">
            <SelectTrigger className="notification-time-select">
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
        
        <div className="notification-actions">
          <Button className="notification-save-button">Save Notification Settings</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationSettings;

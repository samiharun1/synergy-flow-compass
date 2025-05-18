
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings as SettingsIcon } from "lucide-react";
import "./AccountSettings.css";

const AccountSettings = () => {
  return (
    <Card className="account-card">
      <CardHeader className="account-card-header">
        <CardTitle className="account-card-title">Account Settings</CardTitle>
        <CardDescription className="account-card-description">Manage your account</CardDescription>
      </CardHeader>
      <CardContent className="account-card-content">
        <div className="account-password-group">
          <Label htmlFor="changePassword" className="account-password-label">Password</Label>
          <div className="account-password-field">
            <Input 
              id="changePassword" 
              type="password" 
              value="••••••••" 
              disabled
              className="account-password-input"
            />
            <Button variant="outline" className="account-password-button">Change</Button>
          </div>
        </div>
        
        <div className="account-select-group">
          <Label htmlFor="language" className="account-select-label">Language</Label>
          <div className="account-select-wrapper">
            <Select defaultValue="en">
              <SelectTrigger id="language">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English (US)</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
                <SelectItem value="fr">French</SelectItem>
                <SelectItem value="de">German</SelectItem>
                <SelectItem value="ja">Japanese</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="account-select-group">
          <Label htmlFor="timezone" className="account-select-label">Timezone</Label>
          <div className="account-select-wrapper">
            <Select defaultValue="utc-8">
              <SelectTrigger id="timezone">
                <SelectValue placeholder="Select timezone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="utc-8">Pacific Time (UTC-8)</SelectItem>
                <SelectItem value="utc-7">Mountain Time (UTC-7)</SelectItem>
                <SelectItem value="utc-6">Central Time (UTC-6)</SelectItem>
                <SelectItem value="utc-5">Eastern Time (UTC-5)</SelectItem>
                <SelectItem value="utc-0">Greenwich Mean Time (UTC+0)</SelectItem>
                <SelectItem value="utc+1">Central European Time (UTC+1)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="danger-zone">
          <div className="danger-zone-header">
            <SettingsIcon className="danger-zone-icon" />
            <h3 className="danger-zone-title">Danger Zone</h3>
          </div>
          <p className="danger-zone-description">
            Actions here cannot be undone. Be careful.
          </p>
          <div className="danger-zone-actions">
            <Button variant="outline" className="danger-zone-button">
              Reset Account
            </Button>
            <Button variant="outline" className="danger-zone-button">
              Delete Account
            </Button>
          </div>
        </div>
        
        <div className="account-actions">
          <Button className="account-save-button">Save Account Settings</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AccountSettings;

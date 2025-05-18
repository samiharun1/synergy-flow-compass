
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings as SettingsIcon } from "lucide-react";

const AccountSettings = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Settings</CardTitle>
        <CardDescription>Manage your account</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="changePassword">Password</Label>
          <div className="flex items-center gap-2">
            <Input 
              id="changePassword" 
              type="password" 
              value="••••••••" 
              disabled
            />
            <Button variant="outline">Change</Button>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="language">Language</Label>
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
        
        <div className="space-y-2">
          <Label htmlFor="timezone">Timezone</Label>
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
        
        <div className="rounded-md border p-4">
          <div className="flex items-center gap-2">
            <SettingsIcon className="h-5 w-5 text-red-500" />
            <h3 className="font-medium text-red-500">Danger Zone</h3>
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Actions here cannot be undone. Be careful.
          </p>
          <div className="mt-4 flex gap-2">
            <Button variant="outline" className="text-red-500 hover:bg-red-50">
              Reset Account
            </Button>
            <Button variant="outline" className="text-red-500 hover:bg-red-50">
              Delete Account
            </Button>
          </div>
        </div>
        
        <div className="flex justify-end">
          <Button>Save Account Settings</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AccountSettings;


import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Moon, LogOut, Grid3X3, ListChecks, User, Settings as SettingsIcon } from "lucide-react";

const Settings = () => {
  const [themeMode, setThemeMode] = useState("light");
  const [goalsView, setGoalsView] = useState("list");
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    taskReminders: true,
    teamUpdates: true,
    dailyDigest: false,
  });
  
  return (
    <div className="space-y-6">
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

      <Tabs defaultValue="profile">
        <TabsList className="mb-4">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
        </TabsList>
        
        {/* Profile Tab */}
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col items-center gap-4 sm:flex-row">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="" />
                  <AvatarFallback className="text-2xl">U</AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-center gap-2 sm:items-start">
                  <Button variant="outline" size="sm">Change Avatar</Button>
                  <p className="text-xs text-gray-500">PNG, JPG or GIF. Max 2MB.</p>
                </div>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" defaultValue="User Name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="displayName">Display Name</Label>
                  <Input id="displayName" defaultValue="User" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="user@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Input id="role" defaultValue="Team Member" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Input id="bio" defaultValue="Team member focused on project management." />
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Appearance Tab */}
        <TabsContent value="appearance">
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
        </TabsContent>
        
        {/* Notifications Tab */}
        <TabsContent value="notifications">
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
        </TabsContent>
        
        {/* Account Tab */}
        <TabsContent value="account">
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
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;

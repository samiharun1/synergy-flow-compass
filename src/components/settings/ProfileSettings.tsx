
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import "./ProfileSettings.css";

const ProfileSettings = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="profile-card-title">Profile Information</CardTitle>
        <CardDescription className="profile-card-description">Update your personal details</CardDescription>
      </CardHeader>
      <CardContent className="profile-card-content">
        <div className="profile-avatar-section">
          <Avatar className="profile-avatar">
            <AvatarImage src="" />
            <AvatarFallback className="profile-avatar-fallback">U</AvatarFallback>
          </Avatar>
          <div className="profile-avatar-actions">
            <Button variant="outline" size="sm" className="profile-change-avatar-button">Change Avatar</Button>
            <p className="profile-avatar-hint">PNG, JPG or GIF. Max 2MB.</p>
          </div>
        </div>
        
        <div className="profile-form-grid">
          <div className="profile-form-group">
            <Label htmlFor="fullName" className="profile-form-label">Full Name</Label>
            <Input id="fullName" defaultValue="User Name" className="profile-form-input" />
          </div>
          <div className="profile-form-group">
            <Label htmlFor="displayName" className="profile-form-label">Display Name</Label>
            <Input id="displayName" defaultValue="User" className="profile-form-input" />
          </div>
          <div className="profile-form-group">
            <Label htmlFor="email" className="profile-form-label">Email</Label>
            <Input id="email" type="email" defaultValue="user@example.com" className="profile-form-input" />
          </div>
          <div className="profile-form-group">
            <Label htmlFor="role" className="profile-form-label">Role</Label>
            <Input id="role" defaultValue="Team Member" className="profile-form-input" />
          </div>
          <div className="profile-form-group profile-form-group-full">
            <Label htmlFor="bio" className="profile-form-label">Bio</Label>
            <Input id="bio" defaultValue="Team member focused on project management." className="profile-form-input" />
          </div>
        </div>
        
        <div className="profile-form-actions">
          <Button className="profile-save-button">Save Changes</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileSettings;


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Calendar, Users, Clock } from "lucide-react";
import "./QuickShortcuts.css";

const QuickShortcuts = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Shortcuts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="shortcuts-grid">
          <Button variant="outline" className="shortcut-button">
            <Target className="shortcut-icon" />
            <span>My Goals</span>
          </Button>
          <Button variant="outline" className="shortcut-button">
            <Calendar className="shortcut-icon" />
            <span>Calendar</span>
          </Button>
          <Button variant="outline" className="shortcut-button">
            <Users className="shortcut-icon" />
            <span>Team</span>
          </Button>
          <Button variant="outline" className="shortcut-button">
            <Clock className="shortcut-icon" />
            <span>Recent</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickShortcuts;

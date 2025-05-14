
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import "./TodaysFocus.css";

const TodaysFocus = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Today's Focus</CardTitle>
        <CardDescription>Your main goals for today</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="task-list">
          <div className="task-item">
            <div className="task-header">
              <div className="task-name">
                <div className="task-status-dot status-ongoing"></div>
                <span>Complete project proposal</span>
              </div>
              <Badge className="task-priority priority-high">High</Badge>
            </div>
            <div className="task-due">
              Due in 3 hours
            </div>
          </div>
          
          <div className="task-item">
            <div className="task-header">
              <div className="task-name">
                <div className="task-status-dot status-warning"></div>
                <span>Team retrospective meeting</span>
              </div>
              <Badge className="task-priority priority-medium">Medium</Badge>
            </div>
            <div className="task-due">
              2:00 PM - 3:00 PM
            </div>
          </div>
          
          <Button className="w-full" variant="outline">
            View All Tasks
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TodaysFocus;

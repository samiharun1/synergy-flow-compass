
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Smile, Meh, Frown, Calendar, Target, Users, Clock } from "lucide-react";
import "./Dashboard.css";

type MoodType = "happy" | "neutral" | "sad" | null;

const Dashboard = () => {
  const [mood, setMood] = useState<MoodType>(null);
  const [checkInText, setCheckInText] = useState("");
  
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">Dashboard</h1>
          <p className="dashboard-date">{formattedDate}</p>
        </div>
        <div className="dashboard-actions">
          <Button>Add Task</Button>
        </div>
      </div>

      <div className="dashboard-grid">
        {/* Daily Check-in Card */}
        <Card>
          <CardHeader>
            <CardTitle>Daily Check-in</CardTitle>
            <CardDescription>How are you feeling today?</CardDescription>
          </CardHeader>
          <CardContent>
            {mood === null ? (
              <div className="mood-container">
                <div className="mood-options">
                  <button 
                    onClick={() => setMood("happy")}
                    className="mood-button happy"
                  >
                    <Smile className="mood-icon happy" />
                  </button>
                  <button 
                    onClick={() => setMood("neutral")}
                    className="mood-button neutral"
                  >
                    <Meh className="mood-icon neutral" />
                  </button>
                  <button 
                    onClick={() => setMood("sad")}
                    className="mood-button sad"
                  >
                    <Frown className="mood-icon sad" />
                  </button>
                </div>
                <div className="anonymous-text">
                  Your response can remain anonymous
                </div>
              </div>
            ) : (
              <div className="mood-response">
                <div className="mood-selected">
                  {mood === "happy" && <Smile className="mood-selected-icon happy" />}
                  {mood === "neutral" && <Meh className="mood-selected-icon neutral" />}
                  {mood === "sad" && <Frown className="mood-selected-icon sad" />}
                </div>
                <Textarea
                  placeholder="Want to share more about your day? (optional)"
                  value={checkInText}
                  onChange={(e) => setCheckInText(e.target.value)}
                  className="resize-none"
                />
                <div className="check-in-actions">
                  <Button variant="outline" onClick={() => setMood(null)}>Change</Button>
                  <Button>Submit</Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Today's Focus Card */}
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
      </div>

      {/* Quick Shortcuts */}
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

      {/* Team Pulse */}
      <Card>
        <CardHeader>
          <CardTitle>Team Pulse</CardTitle>
          <CardDescription>Today's team mood</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="team-pulse-stats">
            <div className="team-mood-stat">
              <div className="team-mood-percentage">60%</div>
              <Smile className="team-mood-icon happy" />
              <div className="team-mood-label">Happy</div>
            </div>
            <div className="team-mood-stat">
              <div className="team-mood-percentage">30%</div>
              <Meh className="team-mood-icon neutral" />
              <div className="team-mood-label">Neutral</div>
            </div>
            <div className="team-mood-stat">
              <div className="team-mood-percentage">10%</div>
              <Frown className="team-mood-icon sad" />
              <div className="team-mood-label">Sad</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;

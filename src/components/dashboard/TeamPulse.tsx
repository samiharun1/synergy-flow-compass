
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smile, Meh, Frown } from "lucide-react";
import "./TeamPulse.css";

const TeamPulse = () => {
  return (
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
  );
};

export default TeamPulse;


import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Smile, Meh, Frown } from "lucide-react";
import "./DailyCheckIn.css";

type MoodType = "happy" | "neutral" | "sad" | null;

const DailyCheckIn = () => {
  const [mood, setMood] = useState<MoodType>(null);
  const [checkInText, setCheckInText] = useState("");

  return (
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
  );
};

export default DailyCheckIn;


import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Smile, Meh, Frown, Calendar, Target, Users, Clock } from "lucide-react";

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
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-gray-500">{formattedDate}</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-synergy-primary">Add Task</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Daily Check-in Card */}
        <Card>
          <CardHeader>
            <CardTitle>Daily Check-in</CardTitle>
            <CardDescription>How are you feeling today?</CardDescription>
          </CardHeader>
          <CardContent>
            {mood === null ? (
              <div className="space-y-4">
                <div className="flex justify-center gap-4">
                  <button 
                    onClick={() => setMood("happy")}
                    className="flex h-16 w-16 flex-col items-center justify-center rounded-full bg-synergy-muted p-4 hover:bg-green-100"
                  >
                    <Smile className="h-8 w-8 text-green-500" />
                  </button>
                  <button 
                    onClick={() => setMood("neutral")}
                    className="flex h-16 w-16 flex-col items-center justify-center rounded-full bg-synergy-muted p-4 hover:bg-yellow-100"
                  >
                    <Meh className="h-8 w-8 text-yellow-500" />
                  </button>
                  <button 
                    onClick={() => setMood("sad")}
                    className="flex h-16 w-16 flex-col items-center justify-center rounded-full bg-synergy-muted p-4 hover:bg-red-100"
                  >
                    <Frown className="h-8 w-8 text-red-500" />
                  </button>
                </div>
                <div className="text-center text-sm text-gray-500">
                  Your response can remain anonymous
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex justify-center">
                  {mood === "happy" && <Smile className="h-12 w-12 text-green-500" />}
                  {mood === "neutral" && <Meh className="h-12 w-12 text-yellow-500" />}
                  {mood === "sad" && <Frown className="h-12 w-12 text-red-500" />}
                </div>
                <Textarea
                  placeholder="Want to share more about your day? (optional)"
                  value={checkInText}
                  onChange={(e) => setCheckInText(e.target.value)}
                  className="resize-none"
                />
                <div className="flex justify-end gap-2">
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
            <div className="space-y-4">
              <div className="rounded-lg border p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-synergy-ongoing"></div>
                    <span className="font-medium">Complete project proposal</span>
                  </div>
                  <Badge className="bg-synergy-ongoing">High</Badge>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  Due in 3 hours
                </div>
              </div>
              
              <div className="rounded-lg border p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-synergy-warning"></div>
                    <span className="font-medium">Team retrospective meeting</span>
                  </div>
                  <Badge className="bg-synergy-warning">Medium</Badge>
                </div>
                <div className="mt-2 text-sm text-gray-500">
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
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Button variant="outline" className="h-24 flex-col gap-2">
              <Target className="h-6 w-6" />
              <span>My Goals</span>
            </Button>
            <Button variant="outline" className="h-24 flex-col gap-2">
              <Calendar className="h-6 w-6" />
              <span>Calendar</span>
            </Button>
            <Button variant="outline" className="h-24 flex-col gap-2">
              <Users className="h-6 w-6" />
              <span>Team</span>
            </Button>
            <Button variant="outline" className="h-24 flex-col gap-2">
              <Clock className="h-6 w-6" />
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
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-green-500">60%</div>
              <Smile className="mt-2 h-8 w-8 text-green-500" />
              <div className="mt-1 text-sm text-gray-500">Happy</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-yellow-500">30%</div>
              <Meh className="mt-2 h-8 w-8 text-yellow-500" />
              <div className="mt-1 text-sm text-gray-500">Neutral</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-red-500">10%</div>
              <Frown className="mt-2 h-8 w-8 text-red-500" />
              <div className="mt-1 text-sm text-gray-500">Sad</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;


import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Smile, Meh, Frown, MessageSquare, Users, Coffee, UserPlus } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  mood?: "happy" | "neutral" | "sad";
  status: "online" | "away" | "offline";
  lastActivity: string;
}

const MoodIcon = ({ mood }: { mood?: "happy" | "neutral" | "sad" }) => {
  switch (mood) {
    case "happy":
      return <Smile className="h-5 w-5 text-green-500" />;
    case "neutral":
      return <Meh className="h-5 w-5 text-yellow-500" />;
    case "sad":
      return <Frown className="h-5 w-5 text-red-500" />;
    default:
      return null;
  }
};

const StatusBadge = ({ status }: { status: "online" | "away" | "offline" }) => {
  switch (status) {
    case "online":
      return <Badge className="bg-green-500">Online</Badge>;
    case "away":
      return <Badge className="bg-yellow-500">Away</Badge>;
    case "offline":
      return <Badge className="bg-gray-400">Offline</Badge>;
  }
};

const Team = () => {
  const teamMembers: TeamMember[] = [
    {
      id: "1",
      name: "Alex Johnson",
      role: "Project Manager",
      avatar: "",
      mood: "happy",
      status: "online",
      lastActivity: "5 min ago",
    },
    {
      id: "2",
      name: "Samantha Chen",
      role: "UI/UX Designer",
      avatar: "",
      mood: "neutral",
      status: "online",
      lastActivity: "12 min ago",
    },
    {
      id: "3",
      name: "Michael Rodriguez",
      role: "Frontend Developer",
      avatar: "",
      mood: "sad",
      status: "away",
      lastActivity: "1 hour ago",
    },
    {
      id: "4",
      name: "Olivia Wilson",
      role: "Product Owner",
      avatar: "",
      status: "online",
      lastActivity: "Just now",
    },
    {
      id: "5",
      name: "David Thompson",
      role: "Backend Developer",
      avatar: "",
      mood: "happy",
      status: "offline",
      lastActivity: "2 hours ago",
    },
  ];

  const moodData = {
    happy: teamMembers.filter(m => m.mood === "happy").length,
    neutral: teamMembers.filter(m => m.mood === "neutral").length,
    sad: teamMembers.filter(m => m.mood === "sad").length,
    notShared: teamMembers.filter(m => !m.mood).length,
  };

  const totalMembers = teamMembers.length;
  const responseRate = (totalMembers - moodData.notShared) / totalMembers * 100;

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Team</h1>
          <p className="text-gray-500">Collaborate and connect with your team</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <MessageSquare className="mr-2 h-4 w-4" /> Team Chat
          </Button>
          <Button className="bg-synergy-primary">
            <UserPlus className="mr-2 h-4 w-4" /> Invite
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Team Pulse Card */}
        <Card>
          <CardHeader>
            <CardTitle>Team Pulse</CardTitle>
            <CardDescription>Today's check-in data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between">
              <div className="flex flex-col items-center">
                <div className="text-xl font-bold text-green-500">{moodData.happy}</div>
                <Smile className="mt-2 h-7 w-7 text-green-500" />
                <div className="mt-1 text-sm text-gray-500">Happy</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-xl font-bold text-yellow-500">{moodData.neutral}</div>
                <Meh className="mt-2 h-7 w-7 text-yellow-500" />
                <div className="mt-1 text-sm text-gray-500">Neutral</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-xl font-bold text-red-500">{moodData.sad}</div>
                <Frown className="mt-2 h-7 w-7 text-red-500" />
                <div className="mt-1 text-sm text-gray-500">Sad</div>
              </div>
            </div>
            <div className="mt-4 rounded-full bg-gray-100">
              <div 
                className="h-2 rounded-full bg-synergy-primary" 
                style={{ width: `${responseRate}%` }}
              ></div>
            </div>
            <div className="mt-1 text-center text-xs text-gray-500">
              {responseRate.toFixed(0)}% response rate
            </div>
          </CardContent>
        </Card>

        {/* Coffee Chat Card */}
        <Card>
          <CardHeader>
            <CardTitle>Coffee Chat</CardTitle>
            <CardDescription>Connect with teammates</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="mb-4 rounded-full bg-amber-100 p-4">
              <Coffee className="h-12 w-12 text-amber-600" />
            </div>
            <p className="mb-4 text-center text-sm text-gray-600">
              Get to know your colleagues better with informal chats.
            </p>
            <Button className="w-full bg-amber-600 hover:bg-amber-700">
              Find a Match
            </Button>
          </CardContent>
          <CardFooter className="flex justify-center border-t pt-4 text-xs text-gray-500">
            Your last match: 2 weeks ago with Sam Chen
          </CardFooter>
        </Card>

        {/* Team Events Card */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Team Activities</CardTitle>
            <CardDescription>Events and meetings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="rounded-md border p-2">
                <div className="font-medium">Weekly Standup</div>
                <div className="text-xs text-gray-500">Tomorrow, 9:00 AM</div>
              </div>
              <div className="rounded-md border p-2">
                <div className="font-medium">Team Lunch</div>
                <div className="text-xs text-gray-500">Friday, 12:30 PM</div>
              </div>
              <div className="rounded-md border p-2">
                <div className="font-medium">Retrospective</div>
                <div className="text-xs text-gray-500">Next Monday, 3:00 PM</div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full text-xs">
              View Calendar
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
          <CardDescription>Your collaborators</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Members</TabsTrigger>
              <TabsTrigger value="online">Online</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {teamMembers.map((member) => (
                  <Card key={member.id}>
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src={member.avatar} />
                          <AvatarFallback className="bg-synergy-primary text-white">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <h3 className="mt-3 font-medium">{member.name}</h3>
                        <p className="text-sm text-gray-500">{member.role}</p>
                        
                        <div className="mt-3 flex items-center justify-center gap-2">
                          <StatusBadge status={member.status} />
                          {member.mood && <MoodIcon mood={member.mood} />}
                        </div>
                        
                        <div className="mt-4 flex gap-2">
                          <Button variant="outline" size="sm">
                            <MessageSquare className="mr-1 h-3 w-3" />
                            Message
                          </Button>
                          <Button variant="outline" size="sm">
                            <Coffee className="mr-1 h-3 w-3" />
                            Chat
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="online">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {teamMembers
                  .filter(member => member.status === "online")
                  .map((member) => (
                    <Card key={member.id}>
                      <CardContent className="pt-6">
                        <div className="flex flex-col items-center">
                          <Avatar className="h-16 w-16">
                            <AvatarImage src={member.avatar} />
                            <AvatarFallback className="bg-synergy-primary text-white">
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <h3 className="mt-3 font-medium">{member.name}</h3>
                          <p className="text-sm text-gray-500">{member.role}</p>
                          
                          <div className="mt-3 flex items-center justify-center gap-2">
                            <StatusBadge status={member.status} />
                            {member.mood && <MoodIcon mood={member.mood} />}
                          </div>
                          
                          <div className="mt-4 flex gap-2">
                            <Button variant="outline" size="sm">
                              <MessageSquare className="mr-1 h-3 w-3" />
                              Message
                            </Button>
                            <Button variant="outline" size="sm">
                              <Coffee className="mr-1 h-3 w-3" />
                              Chat
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      {/* Team Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Team Insights</CardTitle>
          <CardDescription>Trends and patterns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Mood Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-32 w-full bg-gray-100 p-4 text-center text-sm text-gray-500">
                  Mood chart will appear here
                </div>
                <p className="mt-3 text-sm text-gray-600">
                  Team morale is trending up over the past week.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Productivity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-32 w-full bg-gray-100 p-4 text-center text-sm text-gray-500">
                  Productivity chart will appear here
                </div>
                <p className="mt-3 text-sm text-gray-600">
                  Task completion rate has increased by 15% this month.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-32 w-full bg-gray-100 p-4 text-center text-sm text-gray-500">
                  Connection graph will appear here
                </div>
                <p className="mt-3 text-sm text-gray-600">
                  Cross-team collaboration has improved significantly.
                </p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Team;

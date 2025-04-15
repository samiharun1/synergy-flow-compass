
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, ChevronLeft, ChevronRight, Plus } from "lucide-react";

interface EventType {
  id: string;
  title: string;
  time: string;
  type: "meeting" | "deadline" | "reminder";
  linkedGoal?: string;
}

const Calendar = () => {
  // Generate calendar days for the current month
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
  const days = Array.from({ length: daysInMonth }, (_, i) => {
    const date = new Date(currentYear, currentMonth, i + 1);
    return {
      date,
      day: i + 1,
      isToday: i + 1 === today.getDate(),
      dayName: date.toLocaleDateString('en-US', { weekday: 'short' }),
    };
  });
  
  // Sample events
  const [events] = useState<EventType[]>([
    { id: "1", title: "Team Standup", time: "09:00 AM - 09:30 AM", type: "meeting" },
    { id: "2", title: "Project Review", time: "11:00 AM - 12:00 PM", type: "meeting", linkedGoal: "Complete Q2 Project Proposal" },
    { id: "3", title: "Proposal Deadline", time: "05:00 PM", type: "deadline", linkedGoal: "Complete Q2 Project Proposal" },
    { id: "4", title: "Follow up with Client", time: "02:00 PM", type: "reminder" },
  ]);
  
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  // Sample week data (would be dynamically generated in a real app)
  const weekHours = Array.from({ length: 12 }, (_, i) => {
    const hour = i + 8; // Start at 8 AM
    return hour > 12 ? `${hour - 12} PM` : hour === 12 ? `${hour} PM` : `${hour} AM`;
  });
  
  const monthName = today.toLocaleDateString('en-US', { month: 'long' });

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
          <p className="text-gray-500">Schedule and plan your activities</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <CalendarIcon className="mr-2 h-4 w-4" />
            Today
          </Button>
          <Button className="bg-synergy-primary">
            <Plus className="mr-2 h-4 w-4" />
            New Event
          </Button>
        </div>
      </div>

      <Tabs defaultValue="week">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <TabsList className="mb-4">
            <TabsTrigger value="week">Week</TabsTrigger>
            <TabsTrigger value="month">Month</TabsTrigger>
          </TabsList>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="font-medium">{monthName} {currentYear}</div>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Week View */}
        <TabsContent value="week">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Week of {monthName} {today.getDate()}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <div className="min-w-[900px]">
                  {/* Week header */}
                  <div className="grid grid-cols-8 border-b">
                    <div className="p-2"></div> {/* Empty corner */}
                    {weekDays.map((day, i) => (
                      <div key={day} className={`p-2 text-center font-medium ${i === today.getDay() - 1 || (i === 6 && today.getDay() === 0) ? 'bg-blue-50 text-synergy-primary' : ''}`}>
                        {day}
                      </div>
                    ))}
                  </div>
                  
                  {/* Time slots */}
                  {weekHours.map((hour, hourIndex) => (
                    <div key={hour} className="grid grid-cols-8 border-b">
                      {/* Hour label */}
                      <div className="border-r p-2 text-xs">{hour}</div>
                      
                      {/* Day cells */}
                      {weekDays.map((day, dayIndex) => (
                        <div key={`${day}-${hour}`} className="min-h-[60px] border-r p-1 last:border-r-0">
                          {/* Random event placement for demo */}
                          {hourIndex === 1 && dayIndex === 0 && (
                            <div className="rounded bg-blue-100 p-1 text-xs text-blue-800">
                              9:00 AM - Team Standup
                            </div>
                          )}
                          {hourIndex === 3 && dayIndex === 0 && (
                            <div className="rounded bg-purple-100 p-1 text-xs text-purple-800">
                              11:00 AM - Project Review
                            </div>
                          )}
                          {hourIndex === 6 && dayIndex === 1 && (
                            <div className="rounded bg-amber-100 p-1 text-xs text-amber-800">
                              2:00 PM - Client Follow-up
                            </div>
                          )}
                          {hourIndex === 9 && dayIndex === 0 && (
                            <div className="rounded bg-red-100 p-1 text-xs text-red-800">
                              5:00 PM - Proposal Deadline
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Today's Events */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Today's Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {events.map((event) => (
                  <div key={event.id} className="flex flex-col rounded-md border p-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <div className="font-medium">{event.title}</div>
                      <div className="text-sm text-gray-500">{event.time}</div>
                      {event.linkedGoal && (
                        <div className="mt-1 text-xs text-blue-600">
                          Linked to: {event.linkedGoal}
                        </div>
                      )}
                    </div>
                    <div className="mt-2 sm:mt-0">
                      <Badge 
                        className={
                          event.type === "meeting" ? "bg-blue-500" : 
                          event.type === "deadline" ? "bg-red-500" : 
                          "bg-amber-500"
                        }
                      >
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Month View */}
        <TabsContent value="month">
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 grid grid-cols-7 gap-1 text-center">
                <div className="font-medium">Mon</div>
                <div className="font-medium">Tue</div>
                <div className="font-medium">Wed</div>
                <div className="font-medium">Thu</div>
                <div className="font-medium">Fri</div>
                <div className="font-medium">Sat</div>
                <div className="font-medium">Sun</div>
              </div>
              
              <div className="grid grid-cols-7 gap-1">
                {/* Padding for first day of month */}
                {Array.from({ length: new Date(currentYear, currentMonth, 1).getDay() || 7 - 1 }).map((_, i) => (
                  <div key={`empty-${i}`} className="h-24 rounded-md p-1"></div>
                ))}
                
                {/* Calendar days */}
                {days.map((day) => (
                  <div 
                    key={day.day} 
                    className={`h-24 rounded-md border p-1 ${day.isToday ? 'border-synergy-primary bg-blue-50' : ''}`}
                  >
                    <div className="flex justify-between">
                      <span className={`text-sm font-medium ${day.isToday ? 'text-synergy-primary' : ''}`}>
                        {day.day}
                      </span>
                      <span className="text-xs text-gray-500">{day.dayName}</span>
                    </div>
                    
                    {/* Random events for demo */}
                    {day.day === 15 && (
                      <div className="mt-1 rounded bg-blue-100 p-0.5 text-xs text-blue-800">
                        9:00 AM - Team Standup
                      </div>
                    )}
                    {day.day === 18 && (
                      <div className="mt-1 rounded bg-purple-100 p-0.5 text-xs text-purple-800">
                        11:00 AM - Project Review
                      </div>
                    )}
                    {day.day === today.getDate() && (
                      <>
                        <div className="mt-1 rounded bg-blue-100 p-0.5 text-xs text-blue-800">
                          9:00 AM - Team Standup
                        </div>
                        <div className="mt-1 rounded bg-red-100 p-0.5 text-xs text-red-800">
                          5:00 PM - Deadline
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Upcoming Events */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-md border p-3">
                  <div className="font-medium">Workshop: Agile Methodologies</div>
                  <div className="text-sm text-gray-500">Tomorrow, 10:00 AM - 12:00 PM</div>
                  <div className="mt-1 text-xs text-blue-600">
                    Linked to: Team Skill Development
                  </div>
                </div>
                <div className="rounded-md border p-3">
                  <div className="font-medium">Client Presentation</div>
                  <div className="text-sm text-gray-500">In 3 days, 2:30 PM - 4:00 PM</div>
                  <div className="mt-1 text-xs text-blue-600">
                    Linked to: Complete Q2 Project Proposal
                  </div>
                </div>
                <div className="rounded-md border p-3">
                  <div className="font-medium">Marketing Strategy Meeting</div>
                  <div className="text-sm text-gray-500">Next Monday, 11:00 AM - 12:30 PM</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Calendar;

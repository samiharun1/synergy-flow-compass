
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { BarChart, FileText, Download, Calendar, Check, Timer, AlertCircle, CheckCircle2, Smile, Meh, Frown } from "lucide-react";

const Reports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("month");
  const [selectedGoal, setSelectedGoal] = useState("all");
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Reports & Reflection</h1>
          <p className="text-gray-500">Visualize progress and learn from past efforts</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Time Range
          </Button>
          <Button className="bg-synergy-primary">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Time Period and Goal Filters */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="w-full sm:w-1/2">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger>
              <SelectValue placeholder="Select time period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full sm:w-1/2">
          <Select value={selectedGoal} onValueChange={setSelectedGoal}>
            <SelectTrigger>
              <SelectValue placeholder="Select goal" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Goals</SelectItem>
              <SelectItem value="project-proposal">Project Proposal</SelectItem>
              <SelectItem value="team-skills">Team Skill Development</SelectItem>
              <SelectItem value="customer-feedback">Customer Feedback Impl.</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="overview">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="tasks">Tasks & Goals</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="reflection">Reflection</TabsTrigger>
        </TabsList>
        
        {/* Overview Tab */}
        <TabsContent value="overview">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Goal Completion</CardTitle>
                <CardDescription>Task status summary</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mt-4 flex justify-between">
                  <div className="flex flex-col items-center">
                    <div className="text-xl font-bold text-synergy-completed">8</div>
                    <Check className="mt-2 h-6 w-6 text-synergy-completed" />
                    <div className="mt-1 text-sm text-gray-500">Completed</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-xl font-bold text-synergy-ongoing">5</div>
                    <Timer className="mt-2 h-6 w-6 text-synergy-ongoing" />
                    <div className="mt-1 text-sm text-gray-500">Ongoing</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-xl font-bold text-synergy-paused">2</div>
                    <AlertCircle className="mt-2 h-6 w-6 text-synergy-paused" />
                    <div className="mt-1 text-sm text-gray-500">Paused</div>
                  </div>
                </div>
                
                <div className="mt-6 space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>Progress</span>
                    <span>53% Complete</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-100">
                    <div className="h-2 w-[53%] rounded-full bg-synergy-primary"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Team Mood</CardTitle>
                <CardDescription>Average team mood trend</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mt-4 grid grid-cols-4 gap-2">
                  <div className="flex flex-col items-center">
                    <div className="text-xs text-gray-500">Week 1</div>
                    <div className="mt-2 h-16 rounded-md bg-synergy-muted">
                      <div className="flex h-full flex-col-reverse">
                        <div className="h-[40%] rounded-b-md bg-yellow-400"></div>
                      </div>
                    </div>
                    <Meh className="mt-1 h-4 w-4 text-yellow-500" />
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-xs text-gray-500">Week 2</div>
                    <div className="mt-2 h-16 rounded-md bg-synergy-muted">
                      <div className="flex h-full flex-col-reverse">
                        <div className="h-[40%] rounded-b-md bg-yellow-400"></div>
                      </div>
                    </div>
                    <Meh className="mt-1 h-4 w-4 text-yellow-500" />
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-xs text-gray-500">Week 3</div>
                    <div className="mt-2 h-16 rounded-md bg-synergy-muted">
                      <div className="flex h-full flex-col-reverse">
                        <div className="h-[60%] rounded-b-md bg-green-400"></div>
                      </div>
                    </div>
                    <Smile className="mt-1 h-4 w-4 text-green-500" />
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-xs text-gray-500">Week 4</div>
                    <div className="mt-2 h-16 rounded-md bg-synergy-muted">
                      <div className="flex h-full flex-col-reverse">
                        <div className="h-[70%] rounded-b-md bg-green-400"></div>
                      </div>
                    </div>
                    <Smile className="mt-1 h-4 w-4 text-green-500" />
                  </div>
                </div>
                <div className="mt-4 text-center text-sm text-gray-600">
                  Team mood has improved over time
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Activity</CardTitle>
                <CardDescription>Team engagement metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mt-4 space-y-4">
                  <div>
                    <div className="mb-1 flex justify-between">
                      <span className="text-sm">Check-in Rate</span>
                      <span className="text-sm font-medium">85%</span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-100">
                      <div className="h-2 w-[85%] rounded-full bg-synergy-primary"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="mb-1 flex justify-between">
                      <span className="text-sm">Meeting Attendance</span>
                      <span className="text-sm font-medium">92%</span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-100">
                      <div className="h-2 w-[92%] rounded-full bg-synergy-primary"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="mb-1 flex justify-between">
                      <span className="text-sm">Task Updates</span>
                      <span className="text-sm font-medium">68%</span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-100">
                      <div className="h-2 w-[68%] rounded-full bg-synergy-primary"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="mb-1 flex justify-between">
                      <span className="text-sm">Coffee Chats</span>
                      <span className="text-sm font-medium">45%</span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-100">
                      <div className="h-2 w-[45%] rounded-full bg-synergy-primary"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Timeline */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Timeline</CardTitle>
              <CardDescription>Key events and milestones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                {/* Timeline track */}
                <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200"></div>
                
                <div className="space-y-6">
                  <div className="relative pl-6">
                    <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full border-2 border-white bg-synergy-completed"></div>
                    <div className="text-sm font-medium">April 10, 2023</div>
                    <div className="mt-1 text-gray-500">Project kickoff meeting completed</div>
                  </div>
                  
                  <div className="relative pl-6">
                    <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full border-2 border-white bg-synergy-completed"></div>
                    <div className="text-sm font-medium">April 15, 2023</div>
                    <div className="mt-1 text-gray-500">Team skills assessment finished</div>
                  </div>
                  
                  <div className="relative pl-6">
                    <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full border-2 border-white bg-synergy-ongoing"></div>
                    <div className="text-sm font-medium">Today</div>
                    <div className="mt-1 text-gray-500">Working on project proposal</div>
                  </div>
                  
                  <div className="relative pl-6">
                    <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full border-2 border-white bg-gray-300"></div>
                    <div className="text-sm font-medium">April 25, 2023</div>
                    <div className="mt-1 text-gray-500">Project proposal due</div>
                  </div>
                  
                  <div className="relative pl-6">
                    <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full border-2 border-white bg-gray-300"></div>
                    <div className="text-sm font-medium">May 5, 2023</div>
                    <div className="mt-1 text-gray-500">Client presentation</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Tasks & Goals Tab */}
        <TabsContent value="tasks">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Goal Progress</CardTitle>
                <CardDescription>Status of main goals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex justify-between">
                      <span className="font-medium">Complete Q2 Project Proposal</span>
                      <span className="text-sm">65%</span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-100">
                      <div className="h-2 w-[65%] rounded-full bg-synergy-ongoing"></div>
                    </div>
                    <div className="mt-1 text-xs text-gray-500">Due in 5 days</div>
                  </div>
                  
                  <div>
                    <div className="mb-1 flex justify-between">
                      <span className="font-medium">Team Skill Development</span>
                      <span className="text-sm">40%</span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-100">
                      <div className="h-2 w-[40%] rounded-full bg-synergy-ongoing"></div>
                    </div>
                    <div className="mt-1 text-xs text-gray-500">Ongoing</div>
                  </div>
                  
                  <div>
                    <div className="mb-1 flex justify-between">
                      <span className="font-medium">Customer Feedback Implementation</span>
                      <span className="text-sm">100%</span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-100">
                      <div className="h-2 w-full rounded-full bg-synergy-completed"></div>
                    </div>
                    <div className="mt-1 text-xs text-gray-500">Completed 2 days ago</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Tasks by Status</CardTitle>
                <CardDescription>Distribution of tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-60 w-full items-center justify-center rounded-md bg-gray-50">
                  <div className="text-center">
                    <BarChart className="mx-auto h-12 w-12 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-500">Tasks by status chart</p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="rounded-md border border-synergy-completed/30 bg-synergy-completed/10 p-2 text-center">
                    <div className="text-lg font-bold text-synergy-completed">8</div>
                    <div className="text-xs text-gray-500">Completed</div>
                  </div>
                  <div className="rounded-md border border-synergy-ongoing/30 bg-synergy-ongoing/10 p-2 text-center">
                    <div className="text-lg font-bold text-synergy-ongoing">5</div>
                    <div className="text-xs text-gray-500">In Progress</div>
                  </div>
                  <div className="rounded-md border border-synergy-paused/30 bg-synergy-paused/10 p-2 text-center">
                    <div className="text-lg font-bold text-synergy-paused">2</div>
                    <div className="text-xs text-gray-500">Paused</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Recent Task Completions</CardTitle>
              <CardDescription>Tasks completed in the selected time period</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4 rounded-md border p-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">Research competitors</div>
                    <div className="text-sm text-gray-500">Completed on April 12, 2023</div>
                  </div>
                  <div className="text-xs text-gray-500">
                    Part of: Project Proposal
                  </div>
                </div>
                
                <div className="flex items-center gap-4 rounded-md border p-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">Identify skill gaps</div>
                    <div className="text-sm text-gray-500">Completed on April 15, 2023</div>
                  </div>
                  <div className="text-xs text-gray-500">
                    Part of: Team Skill Development
                  </div>
                </div>
                
                <div className="flex items-center gap-4 rounded-md border p-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">Analyze feedback data</div>
                    <div className="text-sm text-gray-500">Completed on April 8, 2023</div>
                  </div>
                  <div className="text-xs text-gray-500">
                    Part of: Customer Feedback Implementation
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Team Tab */}
        <TabsContent value="team">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Team Mood Trends</CardTitle>
                <CardDescription>Changes over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-60 w-full items-center justify-center rounded-md bg-gray-50">
                  <div className="text-center">
                    <BarChart className="mx-auto h-12 w-12 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-500">Team mood trend chart</p>
                  </div>
                </div>
                <div className="mt-4 text-sm">
                  <p className="text-green-600">
                    <span className="font-medium">↑ 15%</span> increase in team happiness over the past month
                  </p>
                  <p className="mt-1 text-gray-600">
                    Mood improvements correlate with project milestones
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Participation Metrics</CardTitle>
                <CardDescription>Team engagement statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex justify-between">
                      <span className="text-sm">Daily Check-ins</span>
                      <span className="text-sm font-medium">85%</span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-100">
                      <div className="h-2 w-[85%] rounded-full bg-synergy-primary"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="mb-1 flex justify-between">
                      <span className="text-sm">Team Meetings</span>
                      <span className="text-sm font-medium">95%</span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-100">
                      <div className="h-2 w-[95%] rounded-full bg-synergy-primary"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="mb-1 flex justify-between">
                      <span className="text-sm">Goal Updates</span>
                      <span className="text-sm font-medium">72%</span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-100">
                      <div className="h-2 w-[72%] rounded-full bg-synergy-primary"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="mb-1 flex justify-between">
                      <span className="text-sm">Coffee Chats</span>
                      <span className="text-sm font-medium">45%</span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-100">
                      <div className="h-2 w-[45%] rounded-full bg-synergy-primary"></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 rounded-md border p-3 text-sm">
                  <p className="font-medium">Recommendation:</p>
                  <p className="mt-1 text-gray-600">
                    Encourage more coffee chats to improve team connections
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Individual Contributions</CardTitle>
              <CardDescription>Member performance overview</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-md border p-3">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Alex Johnson</div>
                    <div className="text-sm text-gray-500">Project Manager</div>
                  </div>
                  <div className="mt-2 space-y-2">
                    <div>
                      <div className="mb-1 flex justify-between text-xs">
                        <span>Task Completion</span>
                        <span>82%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-gray-100">
                        <div className="h-1.5 w-[82%] rounded-full bg-synergy-primary"></div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 flex justify-between text-xs">
                        <span>Check-in Rate</span>
                        <span>100%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-gray-100">
                        <div className="h-1.5 w-full rounded-full bg-synergy-primary"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-md border p-3">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Samantha Chen</div>
                    <div className="text-sm text-gray-500">UI/UX Designer</div>
                  </div>
                  <div className="mt-2 space-y-2">
                    <div>
                      <div className="mb-1 flex justify-between text-xs">
                        <span>Task Completion</span>
                        <span>90%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-gray-100">
                        <div className="h-1.5 w-[90%] rounded-full bg-synergy-primary"></div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 flex justify-between text-xs">
                        <span>Check-in Rate</span>
                        <span>95%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-gray-100">
                        <div className="h-1.5 w-[95%] rounded-full bg-synergy-primary"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-md border p-3">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Michael Rodriguez</div>
                    <div className="text-sm text-gray-500">Frontend Developer</div>
                  </div>
                  <div className="mt-2 space-y-2">
                    <div>
                      <div className="mb-1 flex justify-between text-xs">
                        <span>Task Completion</span>
                        <span>76%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-gray-100">
                        <div className="h-1.5 w-[76%] rounded-full bg-synergy-primary"></div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 flex justify-between text-xs">
                        <span>Check-in Rate</span>
                        <span>70%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-gray-100">
                        <div className="h-1.5 w-[70%] rounded-full bg-synergy-primary"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Reflection Tab */}
        <TabsContent value="reflection">
          <Card>
            <CardHeader>
              <CardTitle>Reflection Template</CardTitle>
              <CardDescription>Document learnings and insights</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium">What went well?</label>
                <Textarea 
                  placeholder="What achievements or successes are you proud of?"
                  className="min-h-[80px]"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">What could be improved?</label>
                <Textarea 
                  placeholder="What challenges did you face? What would you do differently?"
                  className="min-h-[80px]"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Action items for next time</label>
                <Textarea 
                  placeholder="What specific actions will you take to improve?"
                  className="min-h-[80px]"
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline">Save Draft</Button>
                <Button>Submit Reflection</Button>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Past Reflections</CardTitle>
                <CardDescription>Previous learnings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-md border p-3">
                    <div className="font-medium">March 2023 Project Retrospective</div>
                    <div className="mt-1 text-sm text-gray-500">Created by Alex Johnson</div>
                    <div className="mt-2 flex justify-end">
                      <Button variant="outline" size="sm">
                        <FileText className="mr-1 h-3 w-3" />
                        View
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-md border p-3">
                    <div className="font-medium">Q1 Team Performance Review</div>
                    <div className="mt-1 text-sm text-gray-500">Created by Olivia Wilson</div>
                    <div className="mt-2 flex justify-end">
                      <Button variant="outline" size="sm">
                        <FileText className="mr-1 h-3 w-3" />
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Export Options</CardTitle>
                <CardDescription>Share your reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-md border p-3">
                    <div className="font-medium">PDF Report</div>
                    <div className="mt-1 text-sm text-gray-500">
                      Complete report with all charts and data
                    </div>
                    <div className="mt-2 flex justify-end">
                      <Button variant="outline" size="sm">
                        <Download className="mr-1 h-3 w-3" />
                        Export
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-md border p-3">
                    <div className="font-medium">Excel/CSV Data</div>
                    <div className="mt-1 text-sm text-gray-500">
                      Raw data for further analysis
                    </div>
                    <div className="mt-2 flex justify-end">
                      <Button variant="outline" size="sm">
                        <Download className="mr-1 h-3 w-3" />
                        Export
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-md border p-3">
                    <div className="font-medium">Presentation Slides</div>
                    <div className="mt-1 text-sm text-gray-500">
                      Key findings formatted for presentation
                    </div>
                    <div className="mt-2 flex justify-end">
                      <Button variant="outline" size="sm">
                        <Download className="mr-1 h-3 w-3" />
                        Export
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Reports;

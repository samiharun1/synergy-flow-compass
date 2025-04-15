
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Play, Pause, Plus, ChevronDown, ChevronUp, MoreHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

type GoalStatus = "ongoing" | "paused" | "completed";

interface GoalType {
  id: string;
  title: string;
  description: string;
  status: GoalStatus;
  priority: "high" | "medium" | "low";
  subgoals: SubgoalType[];
}

interface SubgoalType {
  id: string;
  title: string;
  status: GoalStatus;
}

const StatusBadge = ({ status }: { status: GoalStatus }) => {
  switch (status) {
    case "ongoing":
      return (
        <Badge className="bg-synergy-ongoing">
          <Play className="mr-1 h-3 w-3" /> Ongoing
        </Badge>
      );
    case "paused":
      return (
        <Badge className="bg-synergy-paused">
          <Pause className="mr-1 h-3 w-3" /> Paused
        </Badge>
      );
    case "completed":
      return (
        <Badge className="bg-synergy-completed">
          <CheckCircle className="mr-1 h-3 w-3" /> Completed
        </Badge>
      );
  }
};

const PriorityBadge = ({ priority }: { priority: string }) => {
  switch (priority) {
    case "high":
      return <Badge variant="outline" className="border-red-500 text-red-500">High</Badge>;
    case "medium":
      return <Badge variant="outline" className="border-amber-500 text-amber-500">Medium</Badge>;
    case "low":
      return <Badge variant="outline" className="border-green-500 text-green-500">Low</Badge>;
    default:
      return null;
  }
};

const Goals = () => {
  const [goals, setGoals] = useState<GoalType[]>([
    {
      id: "1",
      title: "Complete Q2 Project Proposal",
      description: "Finish drafting the project proposal for the Q2 initiatives",
      status: "ongoing",
      priority: "high",
      subgoals: [
        { id: "1-1", title: "Research competitors", status: "completed" },
        { id: "1-2", title: "Draft executive summary", status: "ongoing" },
        { id: "1-3", title: "Create budget projection", status: "paused" },
      ]
    },
    {
      id: "2",
      title: "Team Skill Development",
      description: "Coordinate training sessions for team members",
      status: "ongoing",
      priority: "medium",
      subgoals: [
        { id: "2-1", title: "Identify skill gaps", status: "completed" },
        { id: "2-2", title: "Schedule workshop sessions", status: "ongoing" },
        { id: "2-3", title: "Follow-up assessments", status: "ongoing" },
      ]
    },
    {
      id: "3",
      title: "Customer Feedback Implementation",
      description: "Implement changes based on recent customer feedback",
      status: "completed",
      priority: "high",
      subgoals: [
        { id: "3-1", title: "Analyze feedback data", status: "completed" },
        { id: "3-2", title: "Prioritize action items", status: "completed" },
        { id: "3-3", title: "Make necessary changes", status: "completed" },
      ]
    },
  ]);

  const [expandedGoals, setExpandedGoals] = useState<string[]>([]);
  const [isAddGoalOpen, setIsAddGoalOpen] = useState(false);
  const [newGoal, setNewGoal] = useState({
    title: "",
    description: "",
    priority: "medium" as "high" | "medium" | "low",
  });

  const toggleGoalExpand = (goalId: string) => {
    setExpandedGoals(prev => 
      prev.includes(goalId) 
        ? prev.filter(id => id !== goalId)
        : [...prev, goalId]
    );
  };

  const handleAddGoal = () => {
    const goal: GoalType = {
      id: Date.now().toString(),
      title: newGoal.title,
      description: newGoal.description,
      status: "ongoing",
      priority: newGoal.priority,
      subgoals: []
    };
    
    setGoals(prev => [goal, ...prev]);
    setNewGoal({
      title: "",
      description: "",
      priority: "medium"
    });
    setIsAddGoalOpen(false);
  };

  const moveGoalUp = (index: number) => {
    if (index === 0) return;
    const newGoals = [...goals];
    [newGoals[index], newGoals[index - 1]] = [newGoals[index - 1], newGoals[index]];
    setGoals(newGoals);
  };

  const moveGoalDown = (index: number) => {
    if (index === goals.length - 1) return;
    const newGoals = [...goals];
    [newGoals[index], newGoals[index + 1]] = [newGoals[index + 1], newGoals[index]];
    setGoals(newGoals);
  };

  const changeGoalStatus = (goalId: string, status: GoalStatus) => {
    setGoals(prev => prev.map(goal => 
      goal.id === goalId ? { ...goal, status } : goal
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Goals & Tasks</h1>
          <p className="text-gray-500">Track your personal and team goals</p>
        </div>
        <Dialog open={isAddGoalOpen} onOpenChange={setIsAddGoalOpen}>
          <DialogTrigger asChild>
            <Button className="bg-synergy-primary">
              <Plus className="mr-2 h-4 w-4" /> Add Goal
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Goal</DialogTitle>
              <DialogDescription>
                Create a new goal for yourself or your team.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="title">Goal Title</Label>
                <Input 
                  id="title" 
                  placeholder="Enter goal title" 
                  value={newGoal.title}
                  onChange={(e) => setNewGoal({...newGoal, title: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input 
                  id="description" 
                  placeholder="Brief description" 
                  value={newGoal.description}
                  onChange={(e) => setNewGoal({...newGoal, description: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="priority">Priority</Label>
                <Select 
                  value={newGoal.priority} 
                  onValueChange={(value) => setNewGoal({...newGoal, priority: value as "high" | "medium" | "low"})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddGoalOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddGoal}>Create Goal</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Goals</TabsTrigger>
          <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-4">
          {goals.map((goal, index) => (
            <Card key={goal.id} className="overflow-hidden">
              <CardHeader className="bg-white pb-2">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <StatusBadge status={goal.status} />
                      <PriorityBadge priority={goal.priority} />
                    </div>
                    <CardTitle className="cursor-pointer" onClick={() => toggleGoalExpand(goal.id)}>
                      {goal.title}
                    </CardTitle>
                    <CardDescription>
                      {goal.description}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => moveGoalUp(index)} className="rounded-full p-1 hover:bg-gray-100">
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    </button>
                    <button onClick={() => moveGoalDown(index)} className="rounded-full p-1 hover:bg-gray-100">
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    </button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-5 w-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => changeGoalStatus(goal.id, "ongoing")}>
                          Mark as Ongoing
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => changeGoalStatus(goal.id, "paused")}>
                          Mark as Paused
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => changeGoalStatus(goal.id, "completed")}>
                          Mark as Completed
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </CardHeader>
              {expandedGoals.includes(goal.id) && (
                <CardContent className="pt-4">
                  <h4 className="mb-2 font-medium">Subgoals</h4>
                  <div className="space-y-2">
                    {goal.subgoals.map((subgoal) => (
                      <div key={subgoal.id} className="flex items-center justify-between rounded-md border p-2">
                        <div className="flex items-center gap-2">
                          {subgoal.status === "completed" ? (
                            <CheckCircle className="h-5 w-5 text-synergy-completed" />
                          ) : subgoal.status === "ongoing" ? (
                            <Play className="h-5 w-5 text-synergy-ongoing" />
                          ) : (
                            <Pause className="h-5 w-5 text-synergy-paused" />
                          )}
                          <span>{subgoal.title}</span>
                        </div>
                        <StatusBadge status={subgoal.status} />
                      </div>
                    ))}
                    <Button variant="outline" size="sm" className="mt-2">
                      <Plus className="mr-1 h-4 w-4" /> Add Subgoal
                    </Button>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="ongoing" className="space-y-4">
          {goals.filter(goal => goal.status === "ongoing").map((goal, index) => (
            <Card key={goal.id}>
              {/* Same card content structure as above */}
              <CardHeader className="bg-white pb-2">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <StatusBadge status={goal.status} />
                      <PriorityBadge priority={goal.priority} />
                    </div>
                    <CardTitle className="cursor-pointer" onClick={() => toggleGoalExpand(goal.id)}>
                      {goal.title}
                    </CardTitle>
                    <CardDescription>
                      {goal.description}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-5 w-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => changeGoalStatus(goal.id, "paused")}>
                          Mark as Paused
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => changeGoalStatus(goal.id, "completed")}>
                          Mark as Completed
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="completed" className="space-y-4">
          {goals.filter(goal => goal.status === "completed").map((goal, index) => (
            <Card key={goal.id}>
              {/* Same card content structure as above */}
              <CardHeader className="bg-white pb-2">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <StatusBadge status={goal.status} />
                      <PriorityBadge priority={goal.priority} />
                    </div>
                    <CardTitle className="cursor-pointer" onClick={() => toggleGoalExpand(goal.id)}>
                      {goal.title}
                    </CardTitle>
                    <CardDescription>
                      {goal.description}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-5 w-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => changeGoalStatus(goal.id, "ongoing")}>
                          Mark as Ongoing
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Goals;

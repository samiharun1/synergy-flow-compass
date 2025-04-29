
import { Button } from "@/components/ui/button";
import { Check, Calendar, Target, MessageSquareText, ChartBar } from "lucide-react";
import mockupImage from "../assets/mockup.png";

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Navigation */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-synergy-primary text-white flex items-center justify-center font-bold">
            S
          </div>
          <span className="font-medium text-xl">SynergyFlow</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-gray-600 hover:text-synergy-primary transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm text-gray-600 hover:text-synergy-primary transition-colors">How it works</a>
          <a href="#" className="text-sm text-gray-600 hover:text-synergy-primary transition-colors">Pricing</a>
          <Button variant="outline" size="sm">Log in</Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Build stronger teams.<br />
            <span className="text-synergy-primary">Together.</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-lg">
            The all-in-one platform for team building, goal tracking, and organizational well-being.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="rounded-full px-8">Try for free</Button>
            <Button size="lg" variant="outline" className="rounded-full px-8">Book a demo</Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <img 
            src={mockupImage} 
            alt="SynergyFlow App Mockup" 
            className="max-w-full md:max-w-md xl:max-w-lg rounded-xl shadow-xl"
          />
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Why teams choose SynergyFlow</h2>
            <p className="text-gray-600">
              Teams are complex, but managing them doesn't have to be. SynergyFlow brings together essential tools in one seamless experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">The Problem</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    ×
                  </div>
                  <p>Multiple disconnected tools for team management</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    ×
                  </div>
                  <p>Lack of visibility into team well-being</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    ×
                  </div>
                  <p>No clear way to track team goals and progress</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">Our Solution</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <Check className="h-3 w-3" />
                  </div>
                  <p>All-in-one platform for team management and well-being</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <Check className="h-3 w-3" />
                  </div>
                  <p>Regular check-ins and mood tracking system</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <Check className="h-3 w-3" />
                  </div>
                  <p>Visual tools to track goals and celebrate progress</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Everything you need in one place</h2>
          <p className="text-gray-600">
            SynergyFlow combines team building and project management into one seamless experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center text-synergy-primary mb-6">
              <Check className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Daily Check-ins</h3>
            <p className="text-gray-600">
              Track team wellbeing with simple emoji check-ins and optional comments.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center text-synergy-primary mb-6">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Team Goals</h3>
            <p className="text-gray-600">
              Set, track, and celebrate team and individual goals with visual progress indicators.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center text-synergy-primary mb-6">
              <Calendar className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Calendar Planning</h3>
            <p className="text-gray-600">
              Coordinate team activities and track important deadlines in a shared calendar.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center text-synergy-primary mb-6">
              <MessageSquareText className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Reflections</h3>
            <p className="text-gray-600">
              Capture insights and learnings with guided reflection templates.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center text-synergy-primary mb-6">
              <ChartBar className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Analytics</h3>
            <p className="text-gray-600">
              Visualize team progress and well-being with insightful reports and dashboards.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-full bg-synergy-accent/20 flex items-center justify-center text-synergy-accent mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Team Connection</h3>
            <p className="text-gray-600">
              Build stronger relationships with fun ice breakers and meaningful team activities.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">How it works</h2>
            <p className="text-gray-600">
              Get started with SynergyFlow in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-synergy-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Create your workspace</h3>
              <p className="text-gray-600">
                Sign up and create your team workspace in minutes. No credit card required.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-synergy-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Invite your team</h3>
              <p className="text-gray-600">
                Add team members with a simple invitation link and customize permissions.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-synergy-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Start collaborating</h3>
              <p className="text-gray-600">
                Begin with daily check-ins, set team goals, and watch your team thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-synergy-primary to-synergy-secondary text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to strengthen your team?</h2>
          <p className="text-white/90 max-w-lg mx-auto mb-8">
            Join thousands of teams already using SynergyFlow to build stronger connections and achieve their goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="rounded-full px-8 bg-white text-synergy-primary hover:bg-white/90">Try for free</Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 border-white text-white hover:bg-white/20">Book a demo</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-16 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-synergy-primary text-white flex items-center justify-center font-bold">
                  S
                </div>
                <span className="font-medium text-xl">SynergyFlow</span>
              </div>
              <p className="text-sm text-gray-600 max-w-xs">
                SynergyFlow helps teams collaborate effectively, track goals, and build stronger connections.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-synergy-primary">Features</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-synergy-primary">Pricing</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-synergy-primary">Use cases</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-synergy-primary">Security</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-synergy-primary">About us</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-synergy-primary">Careers</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-synergy-primary">Blog</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-synergy-primary">Contact us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li><p className="text-sm text-gray-600">hello@synergyflow.com</p></li>
                <li><p className="text-sm text-gray-600">+1 (123) 456-7890</p></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">© 2025 SynergyFlow. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-600 hover:text-synergy-primary">Terms</a>
              <a href="#" className="text-sm text-gray-600 hover:text-synergy-primary">Privacy</a>
              <a href="#" className="text-sm text-gray-600 hover:text-synergy-primary">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;

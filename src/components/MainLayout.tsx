
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Home, 
  Target, 
  Calendar, 
  Users, 
  BarChart2, 
  Settings, 
  Menu, 
  X 
} from "lucide-react";

interface NavItemProps {
  to: string;
  icon: React.ElementType;
  label: string;
  isActive: boolean;
  isSidebarOpen: boolean;
}

const NavItem = ({ to, icon: Icon, label, isActive, isSidebarOpen }: NavItemProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 transition-all duration-200",
        isActive 
          ? "bg-synergy-primary text-white" 
          : "text-gray-700 hover:bg-synergy-muted",
        !isSidebarOpen && "justify-center px-0"
      )}
    >
      <Icon className="h-5 w-5" />
      {isSidebarOpen && <span>{label}</span>}
    </Link>
  );
};

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  const currentPath = location.pathname;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navItems = [
    { to: "/", icon: Home, label: "Dashboard" },
    { to: "/goals", icon: Target, label: "Goals & Tasks" },
    { to: "/calendar", icon: Calendar, label: "Calendar" },
    { to: "/team", icon: Users, label: "Team" },
    { to: "/reports", icon: BarChart2, label: "Reports" },
    { to: "/settings", icon: Settings, label: "Settings" }
  ];

  return (
    <div className="flex h-screen bg-synergy-light">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-10 flex flex-col border-r border-gray-200 bg-white transition-all duration-300",
          isSidebarOpen ? "w-64" : "w-20"
        )}
      >
        <div className="flex h-16 items-center justify-between px-4">
          {isSidebarOpen && (
            <span className="flex items-center gap-2 font-bold text-synergy-primary">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-synergy-primary text-white">
                S
              </div>
              SynergyFlow
            </span>
          )}
          {!isSidebarOpen && (
            <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-lg bg-synergy-primary text-white">
              S
            </div>
          )}
          <button
            onClick={toggleSidebar}
            className="rounded-md p-1 text-gray-500 hover:bg-gray-100 lg:hidden"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="mt-6 flex flex-col gap-1 px-3">
          {navItems.map((item) => (
            <NavItem
              key={item.to}
              to={item.to}
              icon={item.icon}
              label={item.label}
              isActive={currentPath === item.to}
              isSidebarOpen={isSidebarOpen}
            />
          ))}
        </nav>

        <div className="mt-auto p-4">
          {isSidebarOpen && (
            <div className="rounded-lg bg-synergy-muted p-3 text-xs text-gray-500">
              <p className="font-medium">SynergyFlow</p>
              <p>Building stronger teams</p>
            </div>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={cn(
          "flex-1 overflow-auto transition-all duration-300 pb-10",
          isSidebarOpen ? "ml-64" : "ml-20"
        )}
      >
        <div className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6">
          <button
            onClick={toggleSidebar}
            className="rounded-md p-1 text-gray-500 hover:bg-gray-100 hidden lg:block"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          
          <div className="flex items-center gap-4 ml-auto">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-synergy-primary text-white">
              U
            </div>
          </div>
        </div>
        <div className="px-6 py-6 h-[calc(100%-4rem)]">
          {children}
        </div>
      </main>
    </div>
  );
}


import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
import "./Sidebar.css";

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
      className={`nav-item ${isActive ? 'active' : ''} ${!isSidebarOpen ? 'collapsed' : ''}`}
    >
      <Icon className="nav-icon" />
      {isSidebarOpen && <span className="nav-label">{label}</span>}
    </Link>
  );
};

const Sidebar = ({ isSidebarOpen, toggleSidebar }: { isSidebarOpen: boolean, toggleSidebar: () => void }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { to: "/", icon: Home, label: "Dashboard" },
    { to: "/goals", icon: Target, label: "Goals & Tasks" },
    { to: "/calendar", icon: Calendar, label: "Calendar" },
    { to: "/team", icon: Users, label: "Team" },
    { to: "/reports", icon: BarChart2, label: "Reports" },
    { to: "/settings", icon: Settings, label: "Settings" }
  ];

  return (
    <aside className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        {isSidebarOpen && (
          <span className="sidebar-brand">
            <div className="sidebar-logo">S</div>
            SynergyFlow
          </span>
        )}
        {!isSidebarOpen && (
          <div className="sidebar-logo-small">S</div>
        )}
        <button onClick={toggleSidebar} className="sidebar-toggle-mobile">
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <nav className="sidebar-nav">
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

      <div className="sidebar-footer">
        {isSidebarOpen && (
          <div className="sidebar-info">
            <p className="sidebar-info-title">SynergyFlow</p>
            <p className="sidebar-info-subtitle">Building stronger teams</p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;

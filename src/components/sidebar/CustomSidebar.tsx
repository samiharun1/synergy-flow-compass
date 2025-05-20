
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
import "./CustomSidebar.css";

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
      className={`custom-nav-item ${isActive ? 'active' : ''} ${!isSidebarOpen ? 'collapsed' : ''}`}
    >
      <Icon className="custom-nav-icon" />
      {isSidebarOpen && <span className="custom-nav-label">{label}</span>}
    </Link>
  );
};

interface CustomSidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const CustomSidebar = ({ isSidebarOpen, toggleSidebar }: CustomSidebarProps) => {
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
    <aside className={`custom-sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
      <div className="custom-sidebar-header">
        {isSidebarOpen && (
          <span className="custom-sidebar-brand">
            <div className="custom-sidebar-logo">S</div>
            SynergyFlow
          </span>
        )}
        {!isSidebarOpen && (
          <div className="custom-sidebar-logo-small">S</div>
        )}
        <button onClick={toggleSidebar} className="custom-sidebar-toggle mobile">
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <nav className="custom-sidebar-nav">
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

      <div className="custom-sidebar-footer">
        {isSidebarOpen && (
          <div className="custom-sidebar-info">
            <p className="custom-sidebar-info-title">SynergyFlow</p>
            <p className="custom-sidebar-info-subtitle">Building stronger teams</p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default CustomSidebar;

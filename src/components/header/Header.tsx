
import { Menu, X } from "lucide-react";
import "./Header.css";

interface HeaderProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Header = ({ toggleSidebar, isSidebarOpen }: HeaderProps) => {
  return (
    <header className="header">
      <button
        onClick={toggleSidebar}
        className="header-sidebar-toggle"
      >
        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      
      <div className="header-user">
        <div className="header-user-avatar">U</div>
      </div>
    </header>
  );
};

export default Header;

import { useState } from "react";
import "./sidebar.css";
import logo from "../assets/logo2.png";

import {
  LayoutDashboard,
  Settings,
  Users,
  Calculator,
  Activity,
  RefreshCcw,
  Megaphone,
  ClipboardList,
  BarChart2,
  Factory,
  BookOpen,
  Monitor,
  Grid,
  Headphones,
  Building2,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  setActivePage: (page: string) => void;
  activePage: string;
  setSelectedEmployee?: (emp: any) => void;
}

function Sidebar({ isOpen, setActivePage, activePage, setSelectedEmployee }: SidebarProps) {
  const companyName = "MineHR-Solutions Pvt. Ltd.";

  const [employeesOpen, setEmployeesOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, page: "dashboard" },
    { name: "Finance Dashboard", icon: Settings, page: "finance" },
    { name: "Finance & Accounting", icon: Calculator },
    { name: "Productivity & Tracking", icon: Activity },
    { name: "CRM", icon: RefreshCcw },
    { name: "Effective Communication", icon: Megaphone },
    { name: "Orders & Visits", icon: ClipboardList },
    { name: "Analytics & Reports", icon: BarChart2 },
    { name: "Industry Modules", icon: Factory },
    { name: "Knowledge Center", icon: BookOpen },
    { name: "Assets & Resources", icon: Monitor },
    { name: "Other Utilities", icon: Grid },
    { name: "Contact Support Team", icon: Headphones },
  ];

  return (
    <aside className={`sidebar ${!isOpen ? "sidebar-hidden" : ""}`}>
      <div className="sidebar-content-wrapper">
        {/* Header */}
        <div className="sidebar-header">
          <div className="logo-container">
            <img src={logo} alt="Company Logo" className="sidebar-logo" />
          </div>

          <div className="user-profile">
            <div className="user-detail">
              <Building2 size={16} className="profile-icon" />
              <span className="company-text">{companyName}</span>
            </div>
          </div>
        </div>

        {/* Menu */}
        <nav className="sidebar-menu">
          <ul>
            {/* Dashboard + Finance */}
            {menuItems.slice(0, 2).map((item, index) => (
              <li
                key={index}
                className={activePage === item.page ? "active" : ""}
                onClick={() => item.page && setActivePage(item.page)}
                style={{ cursor: item.page ? "pointer" : "default" }}
              >
                <div className="menu-item-content">
                  <item.icon size={18} className="menu-icon" />
                  <span>{item.name}</span>
                </div>
                <ChevronRight size={16} className="arrow-icon" />
              </li>
            ))}

            {/* Employees with Submodules */}
            <li
              className={`${activePage?.includes("employees") ? "active-parent" : ""
                }`}
              onClick={() => setEmployeesOpen(!employeesOpen)}
              style={{ cursor: "pointer" }}
            >
              <div className="menu-item-content">
                <Users size={18} className="menu-icon" />
                <span>Employees</span>
              </div>
              {employeesOpen ? (
                <ChevronDown size={16} className="arrow-icon" />
              ) : (
                <ChevronRight size={16} className="arrow-icon" />
              )}
            </li>

            {employeesOpen && (
              <ul className="submenu-list">
                <li
                  className={activePage === "employees" ? "active-sub" : ""}
                  onClick={(e) => { e.stopPropagation(); setActivePage("employees"); }}
                >
                  <div className="sub-dot"></div>
                  <span>All Employees</span>
                </li>

                <li
                  className={activePage === "addEmployee" ? "active-sub" : ""}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (setSelectedEmployee) setSelectedEmployee(null);
                    setActivePage("addEmployee");
                  }}
                >
                  <div className="sub-dot"></div>
                  <span>Add Employee</span>
                </li>

                <li
                  className={activePage === "onboarding" ? "active-sub" : ""}
                  onClick={(e) => { e.stopPropagation(); setActivePage("onboarding"); }}
                >
                  <div className="sub-dot"></div>
                  <span>Onboarding</span>
                </li>

                <li
                  className={activePage === "offboarding" ? "active-sub" : ""}
                  onClick={(e) => { e.stopPropagation(); setActivePage("offboarding"); }}
                >
                  <div className="sub-dot"></div>
                  <span>Offboarding</span>
                </li>

                <li
                  className={activePage === "exEmployees" ? "active-sub" : ""}
                  onClick={(e) => { e.stopPropagation(); setActivePage("exEmployees"); }}
                >
                  <div className="sub-dot"></div>
                  <span>Ex Employees</span>
                </li>

                <li
                  className={activePage === "managers" ? "active-sub" : ""}
                  onClick={(e) => { e.stopPropagation(); setActivePage("managers"); }}
                >
                  <div className="sub-dot"></div>
                  <span>Managers / Admin</span>
                </li>
              </ul>
            )}

            {/* Rest Menu */}
            {menuItems.slice(2).map((item, index) => (
              <li key={index}>
                <div className="menu-item-content">
                  <item.icon size={18} className="menu-icon" />
                  <span>{item.name}</span>
                </div>
                <ChevronRight size={16} className="arrow-icon" />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
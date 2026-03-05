import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

import Dashboard from "./pages/dashboard";
import FinanceDashboard from "./pages/financeDashboard";
import Employees from "./pages/employees";
import AddEmployee from "./pages/addEmployee";
import Onboarding from "./pages/onboarding";
import ExEmployees from "./pages/exEmployees";
import Managers from "./pages/managers";
import ViewEmployee from "./pages/viewEmployee"; // NEW
import Offboarding from "./pages/offboarding";
import LevelMaster from "./pages/levelMaster";
import LevelHierarchy from "./pages/levelHierarchy";
import UpcomingRetirements from "./pages/upcomingRetirements";
import ProfileChangeRequests from "./pages/profileChangeRequests"; // NEW
import StructureManagement from "./pages/structureManagement";
import Resignation from "./pages/resignation";
import Promotion from "./pages/promotion"; // NEW
// import Login from "./pages/login"; // NEW
import AttendanceGrid from "./pages/attendanceGrid"; // NEW
import PayrollDashboard from "./pages/payrollDashboard"; // NEW
import BulkUpdate from "./pages/bulkUpdate"; // NEW
import ManagerRole from "./pages/managerRole";
import AssignLevel from "./pages/assignLevel";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Bypassed login
  const [currentUser, setCurrentUser] = useState<any>({
    name: "Guest", role: "Admin"
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState("dashboard");

  useEffect(() => {
    if (isAuthenticated) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [isAuthenticated]);

  // 🔹 NEW: store selected employee for view/edit
  const [selectedEmployee, setSelectedEmployee] = useState<any>(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;

      case "finance":
        return <FinanceDashboard />;

      case "employees":
        return (
          <Employees
            setActivePage={setActivePage}
            setSelectedEmployee={setSelectedEmployee}
          />
        );

      case "addEmployee":
        return (
          <AddEmployee
            setActivePage={setActivePage}
            selectedEmployee={selectedEmployee}
            setSelectedEmployee={setSelectedEmployee}
          />
        );

      case "viewEmployee":
        return (
          <ViewEmployee
            selectedEmployee={selectedEmployee}
            setActivePage={setActivePage}
          />
        );

      case "onboarding":
        return <Onboarding />;

      case "offboarding":
        return <Offboarding />;

      case "resignation":
        return <Resignation />;

      case "promotion":
        return <Promotion />;


      case "exEmployees":
        return <ExEmployees setActivePage={setActivePage} setSelectedEmployee={setSelectedEmployee} />;

      case "upcomingRetirements":
        return <UpcomingRetirements />;

      case "managers":
        return <Managers />;

      case "levelMaster":
        return <LevelMaster />;

      case "levelHierarchy":
        return <LevelHierarchy />;

      case "profileChangeRequests":
        return <ProfileChangeRequests />;

      case "attendanceGrid":
        return <AttendanceGrid />;

      case "payrollDashboard":
        return <PayrollDashboard />;

      case "bulkUpdate":
        return <BulkUpdate />;

      case "structureManagement":
        return <StructureManagement />;

      case "managerRole":
        return <ManagerRole />;

      case "assignLevel":
        return <AssignLevel />;


      default:
        return <Dashboard />;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setCurrentUser(null);
  };

  // if (!isAuthenticated) {
  //   return <Login onLogin={handleLogin} />;
  // }

  return (
    <div className="app-layout">
      <Sidebar
        isOpen={isSidebarOpen}
        setActivePage={setActivePage}
        activePage={activePage}
        setSelectedEmployee={setSelectedEmployee}
        user={currentUser}
      />

      <div className="main-area">
        <Header
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
          user={currentUser}
          onLogout={handleLogout}
        />

        {renderPage()}
      </div>
    </div>
  );
}

export default App;
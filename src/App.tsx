import { useState } from "react";
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

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState("dashboard");

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

      case "exEmployees":
        return <ExEmployees setActivePage={setActivePage} setSelectedEmployee={setSelectedEmployee} />;

      case "managers":
        return <Managers />;

      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app-layout">
      <Sidebar
        isOpen={isSidebarOpen}
        setActivePage={setActivePage}
        activePage={activePage}
        setSelectedEmployee={setSelectedEmployee}
      />

      <div className="main-area">
        <Header
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />

        {renderPage()}
      </div>
    </div>
  );
}

export default App;
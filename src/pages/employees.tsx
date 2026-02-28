import { useState, useEffect } from "react";
import axios from "axios";
import { Eye, Edit, Trash2 } from "lucide-react";
import "./employees.css";

interface Employee {
  id: string;
  employeeId: string;
  firstName: string;
  lastName: string;
  designation: string;
  branch: string;
  department: string;
  email: string;
  mobile: string;
  status: string;
}

function Employees({ setActivePage, setSelectedEmployee }: any) {
  const [search, setSearch] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("All");

  const branches = ["All", "Head Office", "Rajkot", "Surat", "Mumbai"];

  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get("https://hrms-backend-liard.vercel.app/api/employees");

      const fetchedEmployees = response.data
        .map((emp: any) => ({
          ...emp,
          id: emp.employeeId,
        }))
        .filter((emp: any) => emp.status === "Active"); // 🔥 only active employees

      setEmployees(fetchedEmployees);
    } catch (error) {
      console.error("Error fetching employees:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleRemove = async (id: string) => {
    if (window.confirm("Are you sure you want to remove this employee?")) {
      try {
        await axios.put(
          `https://hrms-backend-liard.vercel.app/api/employees/${id}/disable`
        );
        fetchEmployees();
      } catch (error) {
        console.error("Failed to disable employee:", error);
        alert("Failed to remove employee.");
      }
    }
  };

  const filteredEmployees = employees.filter(
    (emp) =>
      (selectedBranch === "All" || emp.branch === selectedBranch) &&
      (
        emp.firstName.toLowerCase().includes(search.toLowerCase()) ||
        emp.lastName.toLowerCase().includes(search.toLowerCase()) ||
        emp.id.toLowerCase().includes(search.toLowerCase()) ||
        emp.email.toLowerCase().includes(search.toLowerCase())
      )
  );

  const handleReset = () => {
    setSearch("");
    setSelectedBranch("All");
  };

  const totalCount = employees.length;
  const activeCount = employees.filter(e => e.status === "Active").length;
  const permanentCount = employees.filter(e => e.status === "Permanent").length;
  const probationCount = employees.filter(e => e.status === "Probation").length;

  return (
    <div className="employees-container">

      <div className="page-header">
        <h2>All Employees</h2>
        <div className="action-buttons">
          <button className="btn-outline" onClick={handleReset}>
            Reset
          </button>

          <button
            className="btn-primary"
            onClick={() => {
              setSelectedEmployee(null);
              setActivePage("addEmployee");
            }}
          >
            Add Employee
          </button>

          <button className="btn-success">
            Import Excel
          </button>
        </div>
      </div>

      <div className="summary-cards">
        <div className="card total-card">
          <h4>Total Employees</h4>
          <p>{totalCount}</p>
        </div>

        <div className="card active-card">
          <h4>Active</h4>
          <p>{activeCount}</p>
        </div>

        <div className="card permanent-card">
          <h4>Permanent</h4>
          <p>{permanentCount}</p>
        </div>

        <div className="card probation-card">
          <h4>Probation</h4>
          <p>{probationCount}</p>
        </div>
      </div>

      <div className="search-section">
        <input
          type="text"
          placeholder="Search by ID, Name, Email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="branch-filter">
        {branches.map((branch) => (
          <div
            key={branch}
            className={`branch-pill ${selectedBranch === branch ? "active-pill" : ""}`}
            onClick={() => setSelectedBranch(branch)}
          >
            {branch}
          </div>
        ))}
      </div>

      <div className="table-wrapper">
        {loading ? (
          <p style={{ padding: "20px", textAlign: "center" }}>
            Loading employees from database...
          </p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>Full Name</th>
                <th>Designation</th>
                <th>Branch</th>
                <th>Department</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((emp) => (
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.firstName} {emp.lastName}</td>
                  <td>{emp.designation}</td>
                  <td>{emp.branch}</td>
                  <td>{emp.department}</td>
                  <td>{emp.email}</td>
                  <td>{emp.mobile}</td>
                  <td>
                    <span className={`status-badge ${emp.status.toLowerCase()}`}>
                      {emp.status}
                    </span>
                  </td>
                  <td style={{ whiteSpace: "nowrap" }}>
                    <button
                      className="btn-icon btn-view"
                      title="View Employee"
                      onClick={() => {
                        setSelectedEmployee(emp);
                        setActivePage("viewEmployee");
                      }}
                    >
                      <Eye size={16} />
                    </button>

                    <button
                      className="btn-icon btn-edit"
                      title="Edit Employee"
                      onClick={() => {
                        setSelectedEmployee(emp);
                        setActivePage("addEmployee");
                      }}
                    >
                      <Edit size={16} />
                    </button>

                    <button
                      className="btn-icon btn-delete"
                      title="Delete Employee"
                      onClick={() => handleRemove(emp.id)}
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}

              {filteredEmployees.length === 0 && !loading && (
                <tr>
                  <td colSpan={9} style={{ textAlign: "center", padding: "20px" }}>
                    No employees found in the database.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>

    </div>
  );
}

export default Employees;
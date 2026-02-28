import { useState, useEffect } from "react";
import axios from "axios";
import "./managers.css";

interface Manager {
  id: string; // Visual format (e.g. MGR-1)
  dbId: number; // Internal ID
  name: string;
  email: string;
  mobile: string;
  role: string;
  branchAccess: string;
  departmentAccess: string;
  status: string;
  teamSize: number;
}

function Managers() {
  const [showForm, setShowForm] = useState(false);
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [search, setSearch] = useState("");

  const [managers, setManagers] = useState<Manager[]>([]);
  const [allEmployees, setAllEmployees] = useState<any[]>([]);
  const [selectedEmployees, setSelectedEmployees] = useState<number[]>([]);
  const [activeManager, setActiveManager] = useState<Manager | null>(null);

  const [loading, setLoading] = useState(true);

  const fetchManagers = async () => {
    try {
      const response = await axios.get("https://hrms-backend-liard.vercel.app/api/managers");
      const mapped = response.data.map((m: any) => ({
        id: `MGR-${m.id}`,
        dbId: m.id,
        name: m.name || "",
        email: m.email || "",
        mobile: m.mobile || "N/A",
        role: m.level || "Manager",
        branchAccess: m.branch || "All",
        departmentAccess: m.department || "",
        status: m.active ? "Active" : "Disabled",
        teamSize: m._count?.employees || 0
      }));
      setManagers(mapped);
    } catch (error) {
      console.error("Error fetching managers:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchEmployees = async () => {
    try {
      const response = await axios.get("https://hrms-backend-liard.vercel.app/api/employees");
      setAllEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  useEffect(() => {
    fetchManagers();
    fetchEmployees();
  }, []);

  const [newManager, setNewManager] = useState<Manager>({
    id: "",
    dbId: 0,
    name: "",
    email: "",
    mobile: "",
    role: "Manager",
    branchAccess: "",
    departmentAccess: "",
    status: "Active",
    teamSize: 0
  });

  const handleChange = (e: any) => {
    setNewManager({
      ...newManager,
      [e.target.name]: e.target.value
    });
  };

  const handleAdd = async () => {
    if (!newManager.name || !newManager.email) return;
    try {
      await axios.post("https://hrms-backend-liard.vercel.app/api/managers", {
        name: newManager.name,
        email: newManager.email,
        mobile: newManager.mobile,
        level: newManager.role,
        branch: newManager.branchAccess,
        department: newManager.departmentAccess,
        active: true
      });
      setShowForm(false);
      setNewManager({ id: "", dbId: 0, name: "", email: "", mobile: "", role: "Manager", branchAccess: "", departmentAccess: "", status: "Active", teamSize: 0 });
      fetchManagers();
    } catch (error) {
      console.error("Error adding manager", error);
    }
  };

  const handleDelete = async (dbId: number) => {
    try {
      await axios.delete(`https://hrms-backend-liard.vercel.app/api/managers/${dbId}`);
      fetchManagers();
    } catch (error: any) {
      alert(error.response?.data?.message || "Failed to delete manager");
    }
  };

  // --- Assign Modal Logic ---
  const handleOpenAssign = (mgr: Manager) => {
    setActiveManager(mgr);
    // Find all employees that currently belong to this manager
    const currentTeam = allEmployees.filter(e => e.managerId === mgr.dbId).map(e => e.id);
    setSelectedEmployees(currentTeam);
    setShowAssignModal(true);
  };

  const toggleEmployeeSelect = (empId: number) => {
    if (selectedEmployees.includes(empId)) {
      setSelectedEmployees(selectedEmployees.filter(id => id !== empId));
    } else {
      setSelectedEmployees([...selectedEmployees, empId]);
    }
  };

  const handleSaveAssign = async () => {
    if (!activeManager) return;
    try {
      await axios.post("https://hrms-backend-liard.vercel.app/api/managers/assign", {
        managerId: activeManager.dbId,
        employeeIds: selectedEmployees
      });
      setShowAssignModal(false);
      fetchManagers(); // Refresh counts
      fetchEmployees(); // Refresh employee managerIds
    } catch (error: any) {
      alert("Failed to assign employees. " + (error.response?.data?.message || ""));
    }
  };

  const filteredManagers = managers.filter(m =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="manager-container">
      <h2>Managers / Admin</h2>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="card">
          <h4>Total</h4>
          <p>{managers.length}</p>
        </div>
        <div className="card">
          <h4>Admins</h4>
          <p>{managers.filter(m => m.role === "Admin").length}</p>
        </div>
        <div className="card">
          <h4>Managers</h4>
          <p>{managers.filter(m => m.role === "Manager").length}</p>
        </div>
        <div className="card">
          <h4>Active</h4>
          <p>{managers.filter(m => m.status === "Active").length}</p>
        </div>
      </div>

      {/* Search + Add */}
      <div className="top-controls">
        <input
          placeholder="Search by Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? "Close" : "Add Manager"}
        </button>
      </div>

      {/* Add Form */}
      {showForm && (
        <div className="form-card">
          <h3>Add Manager</h3>
          <div className="grid">
            <input name="name" placeholder="Full Name" value={newManager.name} onChange={handleChange} />
            <input name="email" placeholder="Email" value={newManager.email} onChange={handleChange} />
            <input name="mobile" placeholder="Mobile" value={newManager.mobile} onChange={handleChange} />

            <select name="role" value={newManager.role} onChange={handleChange}>
              <option>Manager</option>
              <option>Admin</option>
            </select>

            <select name="branchAccess" value={newManager.branchAccess} onChange={handleChange}>
              <option value="">Branch Access</option>
              <option>Head Office</option>
              <option>Rajkot</option>
              <option>Surat</option>
              <option>All Branches</option>
            </select>

            <select name="departmentAccess" value={newManager.departmentAccess} onChange={handleChange}>
              <option value="">Department Access</option>
              <option>HR</option>
              <option>IT</option>
              <option>Finance</option>
              <option>Sales</option>
            </select>
          </div>
          <button className="save-btn" onClick={handleAdd}>
            Save Manager
          </button>
        </div>
      )}

      {/* Assign Employees Modal */}
      {showAssignModal && activeManager && (
        <div className="modal-overlay" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="modal-content" style={{ background: 'white', padding: '30px', borderRadius: '12px', width: '500px', maxHeight: '80vh', overflowY: 'auto' }}>
            <h3>Assign Team to {activeManager.name}</h3>
            <p style={{ color: '#64748b', marginBottom: '20px' }}>Select employees who will report to this manager.</p>

            <div className="employee-list" style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
              {allEmployees.map(emp => (
                <label key={emp.id} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#f8fafc', padding: '10px', borderRadius: '6px', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={selectedEmployees.includes(emp.id)}
                    onChange={() => toggleEmployeeSelect(emp.id)}
                  />
                  <span>{emp.firstName} {emp.lastName} <small style={{ color: '#94a3b8' }}>({emp.designation || 'No Role'})</small></span>
                </label>
              ))}
              {allEmployees.length === 0 && <p>No active employees found.</p>}
            </div>

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setShowAssignModal(false)}
                style={{ padding: '8px 16px', background: '#e2e8f0', border: 'none', borderRadius: '6px', cursor: 'pointer', color: '#475569', fontWeight: '500' }}
              >
                Cancel
              </button>
              <button
                onClick={handleSaveAssign}
                style={{ padding: '8px 16px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
              >
                Save Assignments
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="table-wrapper">
        {loading ? (
          <p style={{ textAlign: "center", padding: "20px" }}>Loading Managers...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Role</th>
                <th>Branch</th>
                <th>Department</th>
                <th>Email</th>
                <th>Team Size</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredManagers.map(m => (
                <tr key={m.id}>
                  <td>{m.id}</td>
                  <td>{m.name}</td>
                  <td>{m.role}</td>
                  <td>{m.branchAccess}</td>
                  <td>{m.departmentAccess}</td>
                  <td>{m.email}</td>
                  <td style={{ fontWeight: 'bold' }}>{m.teamSize}</td>
                  <td>
                    <span className={`badge ${m.status.toLowerCase()}`}>
                      {m.status}
                    </span>
                  </td>
                  <td style={{ display: 'flex', gap: '8px' }}>
                    <button
                      style={{ background: '#3b82f6', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}
                      onClick={() => handleOpenAssign(m)}
                    >
                      Assign Team
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(m.dbId)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
              {filteredManagers.length === 0 && !loading && (
                <tr>
                  <td colSpan={9} style={{ textAlign: "center", padding: "20px" }}>No Managers found.</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>

    </div>
  );
}

export default Managers;
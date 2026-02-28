import { ArrowLeft, Edit, Trash2 } from "lucide-react";
import axios from "axios";
import "./viewEmployee.css";

function ViewEmployee({ selectedEmployee, setActivePage }: any) {
  if (!selectedEmployee) {
    return (
      <div className="view-employee-container">
        <div className="view-header">
          <h2>Employee Details</h2>
          <button className="btn-back" onClick={() => setActivePage("employees")}>
            <ArrowLeft size={18} /> Back to Employees
          </button>
        </div>
        <div className="employee-card card-body" style={{ textAlign: "center", padding: "50px" }}>
          <h2 style={{ color: "#64748b" }}>No Employee Selected</h2>
        </div>
      </div>
    );
  }

  const initial = selectedEmployee.firstName ? selectedEmployee.firstName.charAt(0).toUpperCase() : "?";

  const handleRemove = async (id: string) => {
    if (window.confirm("Are you sure you want to remove this employee?")) {
      try {
        await axios.put(`https://hrms-backend-liard.vercel.app/api/employees/${id}/disable`);
        setActivePage("employees");
      } catch (error) {
        console.error("Failed to disable employee:", error);
        alert("Failed to remove employee.");
      }
    }
  };

  return (
    <div className="view-employee-container">
      <div className="view-header">
        <h2>Employee Profile</h2>
        <div style={{ display: "flex", gap: "10px" }}>
          <button className="btn-edit-view" onClick={() => setActivePage("addEmployee")} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px', background: '#f59e0b', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '14px', fontWeight: '500' }}>
            <Edit size={16} /> Edit
          </button>
          <button className="btn-delete-view" onClick={() => handleRemove(selectedEmployee.employeeId || selectedEmployee.id)} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '14px', fontWeight: '500' }}>
            <Trash2 size={16} /> Delete
          </button>
          <button className="btn-back" onClick={() => setActivePage("employees")}>
            <ArrowLeft size={18} /> Back to Directory
          </button>
        </div>
      </div>

      <div className="employee-card">
        {/* Top Gradient Banner */}
        <div className="card-header">
          <div className="avatar-placeholder">{initial}</div>
          <div className="header-info">
            <h3>{selectedEmployee.firstName} {selectedEmployee.lastName}</h3>
            <p>{selectedEmployee.designation}</p>
            <span className={`badge-status ${selectedEmployee.status === 'Active' ? 'active' : 'inactive'}`}>
              {selectedEmployee.status || "Ex-Employee"}
            </span>
          </div>
        </div>

        {/* Details Grid */}
        <div className="card-body">
          <div className="info-grid">
            <div className="info-group">
              <label>Employee ID</label>
              <p>{selectedEmployee.employeeId || selectedEmployee.id}</p>
            </div>

            <div className="info-group">
              <label>Email Address</label>
              <p>{selectedEmployee.email || "—"}</p>
            </div>

            <div className="info-group">
              <label>Mobile Number</label>
              <p>{selectedEmployee.mobile || "—"}</p>
            </div>

            <div className="info-group">
              <label>Branch</label>
              <p>{selectedEmployee.branch || "—"}</p>
            </div>

            <div className="info-group">
              <label>Department</label>
              <p>{selectedEmployee.department || "—"}</p>
            </div>

            <div className="info-group">
              <label>Role / Designation</label>
              <p>{selectedEmployee.designation || "—"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewEmployee;
import { useState, useEffect } from "react";
import axios from "axios";
import "./offboarding.css";

function Offboarding() {
    const [offboardings, setOffboardings] = useState<any[]>([]);
    const [activeEmployees, setActiveEmployees] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    const [showInitiateModal, setShowInitiateModal] = useState(false);
    const [showChecklistModal, setShowChecklistModal] = useState(false);
    const [activeOffboarding, setActiveOffboarding] = useState<any>(null);

    const [formData, setFormData] = useState({
        employeeDbId: "",
        lastWorkingDate: "",
        reason: ""
    });

    const fetchData = async () => {
        try {
            const offRes = await axios.get("http://localhost:5000/api/offboarding");
            setOffboardings(offRes.data);

            const empRes = await axios.get("http://localhost:5000/api/employees");
            // Filter out employees who are already in the offboarding list
            const offboardingIds = offRes.data.map((o: any) => o.employeeId);
            const available = empRes.data.filter((e: any) => !offboardingIds.includes(e.id));
            setActiveEmployees(available);
        } catch (error) {
            console.error("Failed to fetch data", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleInitiate = async () => {
        if (!formData.employeeDbId || !formData.lastWorkingDate) return alert("Employee and Date required");
        try {
            await axios.post("http://localhost:5000/api/offboarding/initiate", {
                employeeDbId: parseInt(formData.employeeDbId),
                lastWorkingDate: formData.lastWorkingDate,
                reason: formData.reason
            });
            setShowInitiateModal(false);
            setFormData({ employeeDbId: "", lastWorkingDate: "", reason: "" });
            fetchData();
        } catch (error: any) {
            alert(error.response?.data?.message || "Failed to initiate");
        }
    };

    const cancelOffboarding = async (id: number) => {
        if (!window.confirm("Are you sure you want to cancel this offboarding process?")) return;
        try {
            await axios.delete(`http://localhost:5000/api/offboarding/${id}`);
            fetchData();
        } catch (error) {
            alert("Failed to cancel offboarding");
        }
    };

    const toggleChecklist = async (checklistId: number, currentStatus: string) => {
        const newStatus = currentStatus === "Completed" ? "Pending" : "Completed";
        try {
            await axios.put(`http://localhost:5000/api/offboarding/checklist/${checklistId}`, {
                status: newStatus
            });
            // Refresh the specific checklist data in the modal
            const offRes = await axios.get("http://localhost:5000/api/offboarding");
            setOffboardings(offRes.data);
            const updatedActive = offRes.data.find((o: any) => o.id === activeOffboarding.id);
            setActiveOffboarding(updatedActive);
        } catch (error) {
            alert("Failed to update checklist status");
        }
    };

    const filtered = offboardings.filter(o =>
        o.employee?.firstName.toLowerCase().includes(search.toLowerCase()) ||
        o.employee?.lastName.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="offboarding-container">
            <h2>Employee Offboarding</h2>

            <div className="top-controls">
                <input
                    placeholder="Search by Employee Name..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button onClick={() => setShowInitiateModal(true)}>Initiate Offboarding</button>
            </div>

            <div className="table-wrapper">
                {loading ? (
                    <p style={{ padding: "20px", textAlign: "center" }}>Loading...</p>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>Employee Name</th>
                                <th>Designation</th>
                                <th>Department</th>
                                <th>Last Working Date</th>
                                <th>Reason</th>
                                <th>Status</th>
                                <th>Tasks</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map(o => {
                                const completedTasks = o.checklists.filter((c: any) => c.status === 'Completed').length;
                                const totalTasks = o.checklists.length;

                                return (
                                    <tr key={o.id}>
                                        <td style={{ fontWeight: '500' }}>{o.employee?.firstName} {o.employee?.lastName}</td>
                                        <td>{o.employee?.designation || 'N/A'}</td>
                                        <td>{o.employee?.department || 'N/A'}</td>
                                        <td>{new Date(o.lastWorkingDate).toLocaleDateString()}</td>
                                        <td style={{ maxWidth: '200px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                            {o.reason || 'N/A'}
                                        </td>
                                        <td>
                                            <span className={`badge ${o.status.toLowerCase()}`}>
                                                {o.status}
                                            </span>
                                        </td>
                                        <td>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <span style={{ fontSize: '13px', fontWeight: '500' }}>{completedTasks}/{totalTasks}</span>
                                                <div style={{ width: '60px', height: '6px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
                                                    <div style={{ height: '100%', width: `${(completedTasks / totalTasks) * 100}%`, background: completedTasks === totalTasks ? '#16a34a' : '#3b82f6' }}></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td style={{ display: 'flex', gap: '8px' }}>
                                            <button
                                                className="checklist-btn"
                                                onClick={() => { setActiveOffboarding(o); setShowChecklistModal(true); }}
                                            >
                                                Checklist
                                            </button>
                                            <button
                                                style={{ background: 'transparent', border: '1px solid #ef4444', color: '#ef4444', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer' }}
                                                onClick={() => cancelOffboarding(o.id)}
                                            >
                                                Cancel
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                            {filtered.length === 0 && (
                                <tr>
                                    <td colSpan={8} style={{ textAlign: "center", padding: "30px" }}>No offboarding records found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </div>

            {/* INITIATE MODAL */}
            {showInitiateModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Initiate Offboarding</h3>
                        <p className="modal-desc">Select an employee and define their exit parameters to spawn their clearance checklists.</p>

                        <div className="form-group">
                            <label>Select Employee</label>
                            <select name="employeeDbId" value={formData.employeeDbId} onChange={handleChange}>
                                <option value="">-- Select Active Employee --</option>
                                {activeEmployees.map(e => (
                                    <option key={e.id} value={e.id}>{e.firstName} {e.lastName} ({e.employeeId})</option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Last Working Date</label>
                            <input type="date" name="lastWorkingDate" value={formData.lastWorkingDate} onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label>Reason for Exit</label>
                            <textarea name="reason" value={formData.reason} onChange={handleChange} rows={3} placeholder="Resignation, Termination, etc..."></textarea>
                        </div>

                        <div className="modal-actions">
                            <button className="btn-cancel" onClick={() => setShowInitiateModal(false)}>Cancel</button>
                            <button className="btn-submit" onClick={handleInitiate} style={{ background: '#3b82f6' }}>Initiate Process</button>
                        </div>
                    </div>
                </div>
            )}

            {/* CHECKLIST MODAL */}
            {showChecklistModal && activeOffboarding && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                            <h3 style={{ margin: 0 }}>Exit Clearance Checklist</h3>
                            <span className={`badge ${activeOffboarding.status.toLowerCase()}`}>{activeOffboarding.status}</span>
                        </div>
                        <p className="modal-desc">
                            Employee: <strong>{activeOffboarding.employee.firstName} {activeOffboarding.employee.lastName}</strong><br />
                            LWD: {new Date(activeOffboarding.lastWorkingDate).toLocaleDateString()}
                        </p>

                        <div className="checklists">
                            {activeOffboarding.checklists.map((c: any) => (
                                <div className="checklist-item" key={c.id}>
                                    <div className="checklist-info">
                                        <p>{c.department} Clearance</p>
                                        <small>{c.taskName}</small>
                                    </div>
                                    <button
                                        className={`status-toggle ${c.status === 'Completed' ? 'completed' : 'pending'}`}
                                        onClick={() => toggleChecklist(c.id, c.status)}
                                    >
                                        {c.status}
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="modal-actions">
                            <button className="btn-cancel" onClick={() => setShowChecklistModal(false)}>Close</button>
                            {activeOffboarding.status === 'Completed' && (
                                <button className="btn-submit" onClick={() => {
                                    alert("This would typically call the /api/employees/:id endpoint to DELETE/Move the employee to Ex-Employees now that offboarding is complete!");
                                }}>
                                    Finalize & Archive Employee
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Offboarding;

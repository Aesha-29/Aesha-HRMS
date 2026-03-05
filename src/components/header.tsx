import "./header.css";
import { useState, useEffect } from "react";
import { Search, Bell, User, PanelLeftClose } from "lucide-react";

interface HeaderProps {
    toggleSidebar: () => void;
    isSidebarOpen: boolean;
    user?: any;
    onLogout?: () => void;
}

function Header({ toggleSidebar, isSidebarOpen, user, onLogout }: HeaderProps) {
    const [placeholderText, setPlaceholderText] = useState("Search services...");
    const services = [
        "Search Employees...",
        "Search Payroll...",
        "Search Recruitment...",
        "Search Performance..."
    ];

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setPlaceholderText(services[index]);
            index = (index + 1) % services.length;
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <header className="header">
            {/* Left: Sidebar Toggle Button */}
            <button
                className={`menu-toggle-btn ${!isSidebarOpen ? 'closed' : ''}`}
                onClick={toggleSidebar}
                aria-label="Toggle Sidebar"
            >
                <PanelLeftClose
                    size={24}
                    className={`menu-icon-btn ${!isSidebarOpen ? 'rotate-180' : ''}`}
                />
            </button>
            {/* Search Bar - Rotates services */}
            <div className="search-container">
                <Search size={18} className="search-icon" />
                <input
                    type="text"
                    placeholder={placeholderText}
                    className="search-input"
                />
            </div>

            <div className="header-spacer"></div>

            {/* Notification Menu */}
            <div className="notifications">
                <Bell size={20} className="bell-icon" />
                <div className="notification-dot" />
            </div>

            {/* Global Clock In / Out Widget */}
            {user && user.role !== "Admin" && (
                <div style={{ display: 'flex', gap: '8px', marginRight: '24px', paddingLeft: '24px', borderLeft: '1px solid #e2e8f0' }}>
                    <button
                        style={{ padding: '8px 16px', background: '#ecfdf5', color: '#059669', border: '1px solid #a7f3d0', borderRadius: '8px', fontWeight: 'bold', fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
                        onClick={async () => {
                            try {
                                await fetch('http://localhost:5000/api/attendance/clock-in', {
                                    method: 'POST',
                                    headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
                                });
                                alert('Clocked In Successfully!');
                            } catch (e) {
                                alert('Failed to clock in or already clocked in.');
                            }
                        }}
                    >
                        Clock In
                    </button>
                    <button
                        style={{ padding: '8px 16px', background: '#fef2f2', color: '#dc2626', border: '1px solid #fecaca', borderRadius: '8px', fontWeight: 'bold', fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
                        onClick={async () => {
                            try {
                                await fetch('http://localhost:5000/api/attendance/clock-out', {
                                    method: 'POST',
                                    headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
                                });
                                alert('Clocked Out Successfully!');
                            } catch (e) {
                                alert('Failed to clock out or already clocked out.');
                            }
                        }}
                    >
                        Clock Out
                    </button>
                </div>
            )}

            {/* User Profile - Rightmost */}
            <div className="user-profile-header" style={{ position: 'relative' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginRight: '12px' }}>
                    <span className="header-user-name" style={{ fontWeight: '600', fontSize: '14px' }}>
                        {user ? user.name : "Guest"}
                    </span>
                    <span style={{ fontSize: '12px', color: '#64748b' }}>
                        {user ? user.role : "Unknown"}
                    </span>
                </div>
                <div className="user-avatar-header premium-navy">
                    <User size={20} />
                </div>
                {onLogout && (
                    <button
                        onClick={onLogout}
                        style={{ marginLeft: '16px', padding: '6px 12px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}>
                        Logout
                    </button>
                )}
            </div>
        </header>
    );
}

export default Header;

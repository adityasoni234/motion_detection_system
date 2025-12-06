import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaChartLine, FaHistory, FaVideo, FaCog, FaHome, FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

const Sidebar = () => {
    const { logout } = useAuth();

    const navItems = [
        { path: '/', name: 'Dashboard', icon: <FaHome /> },
        { path: '/live', name: 'Live Camera', icon: <FaVideo /> },
        { path: '/history', name: 'History', icon: <FaHistory /> },
        { path: '/analytics', name: 'Analytics', icon: <FaChartLine /> },
        { path: '/settings', name: 'Settings', icon: <FaCog /> },
    ];

    const sidebarStyle = {
        width: 'var(--sidebar-width)',
        height: '100vh',
        background: 'var(--bg-secondary)',
        color: 'var(--text-primary)',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        left: 0,
        top: 0,
        borderRight: '1px solid var(--bg-accent)'
    };

    const linkStyle = ({ isActive }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: '1rem 1.5rem',
        color: isActive ? 'var(--accent-color)' : 'var(--text-secondary)',
        background: isActive ? 'rgba(56, 189, 248, 0.1)' : 'transparent',
        borderLeft: isActive ? '3px solid var(--accent-color)' : '3px solid transparent',
        transition: 'all 0.2s'
    });

    return (
        <div style={sidebarStyle}>
            <div style={{ padding: '2rem', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-color)' }}>
                MotionGuard
            </div>
            <nav style={{ flex: 1 }}>
                {navItems.map((item) => (
                    <NavLink key={item.path} to={item.path} style={linkStyle}>
                        <span style={{ marginRight: '1rem' }}>{item.icon}</span>
                        {item.name}
                    </NavLink>
                ))}
            </nav>
            <div style={{ padding: '1rem' }}>
                <button
                    onClick={logout}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                        padding: '1rem',
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--danger-color)',
                        cursor: 'pointer',
                        fontSize: '1rem'
                    }}
                >
                    <FaSignOutAlt style={{ marginRight: '1rem' }} />
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;

import React from 'react';
import { motion } from 'framer-motion';
import { FaVideo, FaBell, FaShieldAlt, FaWifi } from 'react-icons/fa';

const StatusCard = ({ title, value, icon, color }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
            background: 'var(--bg-secondary)',
            padding: '1.5rem',
            borderRadius: '12px',
            boxShadow: 'var(--card-shadow)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}
    >
        <div>
            <h3 style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{title}</h3>
            <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>{value}</div>
        </div>
        <div style={{
            background: `${color}20`,
            color: color,
            padding: '1rem',
            borderRadius: '50%',
            fontSize: '1.5rem'
        }}>
            {icon}
        </div>
    </motion.div>
);

const Dashboard = () => {
    return (
        <div>
            <h1 style={{ marginBottom: '2rem' }}>Dashboard</h1>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1.5rem',
                marginBottom: '2rem'
            }}>
                <StatusCard title="System Status" value="Armed" icon={<FaShieldAlt />} color="var(--success-color)" />
                <StatusCard title="Active Cameras" value="4/4" icon={<FaVideo />} color="var(--accent-color)" />
                <StatusCard title="Motion Alerts" value="12" icon={<FaBell />} color="var(--warning-color)" />
                <StatusCard title="Network" value="Strong" icon={<FaWifi />} color="var(--text-primary)" />
            </div>

            <div style={{
                background: 'var(--bg-secondary)',
                padding: '1.5rem',
                borderRadius: '12px',
                boxShadow: 'var(--card-shadow)'
            }}>
                <h2 style={{ marginBottom: '1rem' }}>Recent Activity</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {[1, 2, 3].map((item) => (
                        <div key={item} style={{
                            padding: '1rem',
                            background: 'var(--bg-primary)',
                            borderRadius: '8px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <div>
                                <span style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>Front Door</span>
                                <span style={{ color: 'var(--text-secondary)' }}>Motion detected</span>
                            </div>
                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>2 mins ago</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

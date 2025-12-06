import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{
                marginLeft: 'var(--sidebar-width)',
                width: `calc(100% - var(--sidebar-width))`,
                minHeight: '100vh',
                background: 'var(--bg-primary)',
                padding: '2rem'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;

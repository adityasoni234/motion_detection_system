import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const data = [
    { name: 'Mon', events: 4 },
    { name: 'Tue', events: 3 },
    { name: 'Wed', events: 7 },
    { name: 'Thu', events: 2 },
    { name: 'Fri', events: 9 },
    { name: 'Sat', events: 12 },
    { name: 'Sun', events: 8 },
];

const timeData = [
    { name: '00:00', users: 10 },
    { name: '04:00', users: 5 },
    { name: '08:00', users: 30 },
    { name: '12:00', users: 45 },
    { name: '16:00', users: 60 },
    { name: '20:00', users: 40 },
    { name: '23:59', users: 20 },
];

const Analytics = () => {
    return (
        <div>
            <h1 style={{ marginBottom: '2rem' }}>Analytics & Insights</h1>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div style={{
                    background: 'var(--bg-secondary)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    boxShadow: 'var(--card-shadow)'
                }}>
                    <h2 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Weekly Motion Events</h2>
                    <div style={{ height: '300px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorEvents" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="var(--accent-color)" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="var(--accent-color)" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="name" stroke="var(--text-secondary)" />
                                <YAxis stroke="var(--text-secondary)" />
                                <CartesianGrid strokeDasharray="3 3" stroke="var(--bg-accent)" />
                                <Tooltip
                                    contentStyle={{ background: 'var(--bg-primary)', border: 'none', borderRadius: '8px' }}
                                    itemStyle={{ color: 'var(--text-primary)' }}
                                />
                                <Area type="monotone" dataKey="events" stroke="var(--accent-color)" fillOpacity={1} fill="url(#colorEvents)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div style={{
                    background: 'var(--bg-secondary)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    boxShadow: 'var(--card-shadow)'
                }}>
                    <h2 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Daily Activity</h2>
                    <div style={{ height: '300px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={timeData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="var(--bg-accent)" />
                                <XAxis dataKey="name" stroke="var(--text-secondary)" />
                                <YAxis stroke="var(--text-secondary)" />
                                <Tooltip
                                    contentStyle={{ background: 'var(--bg-primary)', border: 'none', borderRadius: '8px' }}
                                    itemStyle={{ color: 'var(--text-primary)' }}
                                    cursor={{ fill: 'var(--bg-accent)' }}
                                />
                                <Bar dataKey="users" fill="var(--success-color)" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analytics;

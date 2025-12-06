import React from 'react';
import { FaDownload, FaFilter, FaPlay } from 'react-icons/fa';

const History = () => {
    const events = [
        { id: 1, camera: 'Front Door', time: '2023-10-27 14:30:22', type: 'Motion Detected', duration: '15s' },
        { id: 2, camera: 'Backyard', time: '2023-10-27 12:15:00', type: 'Person Detected', duration: '45s' },
        { id: 3, camera: 'Garage', time: '2023-10-27 09:10:05', type: 'Motion Detected', duration: '10s' },
        { id: 4, camera: 'Front Door', time: '2023-10-26 23:45:12', type: 'Motion Detected', duration: '20s' },
        { id: 5, camera: 'Living Room', time: '2023-10-26 20:20:20', type: 'Sound Detected', duration: '5s' },
    ];

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1>Event History</h1>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button style={{
                        background: 'var(--bg-secondary)',
                        border: 'none',
                        padding: '0.5rem 1rem',
                        borderRadius: '6px',
                        color: 'var(--text-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        <FaFilter /> Filter
                    </button>
                </div>
            </div>

            <div style={{
                background: 'var(--bg-secondary)',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: 'var(--card-shadow)'
            }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ background: 'var(--bg-accent)', textAlign: 'left' }}>
                            <th style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Event Time</th>
                            <th style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Camera</th>
                            <th style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Type</th>
                            <th style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Duration</th>
                            <th style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map((event) => (
                            <tr key={event.id} style={{ borderTop: '1px solid var(--bg-accent)' }}>
                                <td style={{ padding: '1rem' }}>{event.time}</td>
                                <td style={{ padding: '1rem' }}>{event.camera}</td>
                                <td style={{ padding: '1rem' }}>
                                    <span style={{
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '20px',
                                        background: 'rgba(56, 189, 248, 0.1)',
                                        color: 'var(--accent-color)',
                                        fontSize: '0.85rem'
                                    }}>
                                        {event.type}
                                    </span>
                                </td>
                                <td style={{ padding: '1rem' }}>{event.duration}</td>
                                <td style={{ padding: '1rem' }}>
                                    <button style={{
                                        background: 'transparent',
                                        border: 'none',
                                        color: 'var(--text-primary)',
                                        marginRight: '1rem',
                                        cursor: 'pointer'
                                    }}>
                                        <FaPlay />
                                    </button>
                                    <button style={{
                                        background: 'transparent',
                                        border: 'none',
                                        color: 'var(--text-secondary)',
                                        cursor: 'pointer'
                                    }}>
                                        <FaDownload />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default History;

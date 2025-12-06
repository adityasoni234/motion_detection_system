import React from 'react';
import { FaCamera } from 'react-icons/fa';

const LiveCamera = () => {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1>Live Camera Feed</h1>
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
                        <FaCamera /> Snapshot
                    </button>
                </div>
            </div>

            <div style={{
                position: 'relative',
                width: '100%',
                paddingTop: '56.25%', /* 16:9 Aspect Ratio */
                background: '#000',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: 'var(--card-shadow)'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-secondary)'
                }}>
                    {/* Placeholder for video feed */}
                    <div style={{ textAlign: 'center' }}>
                        <FaCamera size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                        <p>Connecting to Camera Stream...</p>
                        <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>rtsp://192.168.1.10:8554/live</p>
                    </div>
                </div>

                {/* Overlay Controls */}
                <div style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: 'rgba(0,0,0,0.5)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}>
                    <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: 'var(--danger-color)',
                        animation: 'pulse 1s infinite'
                    }} />
                    <span style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 'bold' }}>LIVE</span>
                </div>
            </div>

            <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
                {['Cam 1', 'Cam 2', 'Cam 3', 'Cam 4'].map((cam, idx) => (
                    <div key={idx} style={{
                        background: 'var(--bg-secondary)',
                        padding: '1rem',
                        borderRadius: '8px',
                        textAlign: 'center',
                        cursor: 'pointer',
                        border: idx === 0 ? '1px solid var(--accent-color)' : '1px solid transparent'
                    }}>
                        {cam}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LiveCamera;

import React, { useState, useEffect } from 'react';
import { FaCamera, FaRunning } from 'react-icons/fa';
import { motion } from 'framer-motion';

const LiveCamera = () => {
    const [isMotionDetected, setIsMotionDetected] = useState(false);

    // Auto-turn off motion alert after 5 seconds to simulate real-life behavior
    useEffect(() => {
        let timeout;
        if (isMotionDetected) {
            timeout = setTimeout(() => setIsMotionDetected(false), 5000);
        }
        return () => clearTimeout(timeout);
    }, [isMotionDetected]);

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1>Live Camera Feed</h1>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button
                        onClick={() => setIsMotionDetected(!isMotionDetected)}
                        style={{
                            background: isMotionDetected ? 'var(--danger-color)' : 'var(--bg-secondary)',
                            border: 'none',
                            padding: '0.5rem 1rem',
                            borderRadius: '6px',
                            color: '#fff',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            transition: 'background 0.3s'
                        }}
                    >
                        <FaRunning /> {isMotionDetected ? 'Motion Detected!' : 'Simulate Motion'}
                    </button>
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

            <motion.div
                animate={{
                    boxShadow: isMotionDetected
                        ? ['0 0 0px var(--danger-color)', '0 0 20px var(--danger-color)', '0 0 0px var(--danger-color)']
                        : 'var(--card-shadow)',
                    borderColor: isMotionDetected ? 'var(--danger-color)' : 'transparent'
                }}
                transition={{
                    duration: 1,
                    repeat: isMotionDetected ? Infinity : 0
                }}
                style={{
                    position: 'relative',
                    width: '100%',
                    paddingTop: '56.25%', /* 16:9 Aspect Ratio */
                    background: '#000',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '4px solid transparent'
                }}
            >
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

                {/* Motion Alert Overlay */}
                {isMotionDetected && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{
                            position: 'absolute',
                            top: '1rem',
                            right: '1rem',
                            background: 'var(--danger-color)',
                            color: '#fff',
                            padding: '0.5rem 1rem',
                            borderRadius: '6px',
                            fontWeight: 'bold',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}
                    >
                        <FaRunning /> MOTION DETECTED
                    </motion.div>
                )}
            </motion.div>

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

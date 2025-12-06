import React, { useState } from 'react';

const ToggleSwitch = ({ checked, onChange }) => (
    <div
        onClick={() => onChange(!checked)}
        style={{
            width: '50px',
            height: '24px',
            background: checked ? 'var(--accent-color)' : 'var(--bg-accent)',
            borderRadius: '12px',
            position: 'relative',
            cursor: 'pointer',
            transition: 'background 0.2s'
        }}
    >
        <div style={{
            width: '20px',
            height: '20px',
            background: '#fff',
            borderRadius: '50%',
            position: 'absolute',
            top: '2px',
            left: checked ? '28px' : '2px',
            transition: 'left 0.2s'
        }} />
    </div>
);

const Settings = () => {
    const [motionAlerts, setMotionAlerts] = useState(true);
    const [emailNotifs, setEmailNotifs] = useState(true);
    const [soundAlerts, setSoundAlerts] = useState(false);
    const [sensitivity, setSensitivity] = useState(75);

    return (
        <div>
            <h1 style={{ marginBottom: '2rem' }}>Settings</h1>

            <div style={{ maxWidth: '800px' }}>
                <div style={{
                    background: 'var(--bg-secondary)',
                    padding: '2rem',
                    borderRadius: '12px',
                    boxShadow: 'var(--card-shadow)',
                    marginBottom: '2rem'
                }}>
                    <h2 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--bg-accent)', paddingBottom: '0.5rem' }}>General Notifications</h2>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <div>
                            <div style={{ fontWeight: 'bold' }}>Motion Alerts</div>
                            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Receive pop-up alerts when motion is detected</div>
                        </div>
                        <ToggleSwitch checked={motionAlerts} onChange={setMotionAlerts} />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <div>
                            <div style={{ fontWeight: 'bold' }}>Email Notifications</div>
                            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Send summary emails daily</div>
                        </div>
                        <ToggleSwitch checked={emailNotifs} onChange={setEmailNotifs} />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <div style={{ fontWeight: 'bold' }}>Sound Alerts</div>
                            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Play sound on dashboard when alert triggers</div>
                        </div>
                        <ToggleSwitch checked={soundAlerts} onChange={setSoundAlerts} />
                    </div>
                </div>

                <div style={{
                    background: 'var(--bg-secondary)',
                    padding: '2rem',
                    borderRadius: '12px',
                    boxShadow: 'var(--card-shadow)'
                }}>
                    <h2 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--bg-accent)', paddingBottom: '0.5rem' }}>Sensor Sensitivity</h2>

                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                            <label>Motion Sensitivity Level</label>
                            <span style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>{sensitivity}%</span>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={sensitivity}
                            onChange={(e) => setSensitivity(e.target.value)}
                            style={{ width: '100%', cursor: 'pointer' }}
                        />
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                            <span>Low</span>
                            <span>High</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;

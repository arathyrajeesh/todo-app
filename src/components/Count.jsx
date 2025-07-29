import React from 'react';
import './Count.css';

function CountCard({ type, count }) {
    return (
    <div className="count-card">
        <h4>{type === 'active' ? 'Active' : 'Completed'}</h4>
        <p>{count}</p>
    </div>
);
}

export default CountCard;

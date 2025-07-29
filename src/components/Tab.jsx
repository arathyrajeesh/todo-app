import React from 'react';
import './Tab.css';

function Tab({ setFilter }) {
    return (
    <div className="tab">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
    </div>
);
}

export default Tab;

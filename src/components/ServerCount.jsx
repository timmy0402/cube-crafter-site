"use client";
import React, { useEffect, useState } from 'react';

const ServerCount = () => {
    const [count, setCount] = useState(null);

    useEffect(() => {
        fetch('/api/stats')
            .then(res => res.json())
            .then(data => {
                if (data.count !== null) {
                    setCount(data.count);
                }
            })
            .catch(err => console.error("Failed to load server count", err));
    }, []);

    if (count === null) return null;

    return (
        <span className="server-count-badge">
            Currently serving <strong>{count} servers</strong>
        </span>
    );
};

export default ServerCount;

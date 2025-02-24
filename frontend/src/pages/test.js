'use client';
import { useState, useEffect } from 'react';

export default function TestPage() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/test`)
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching data:', err);
                setLoading(false);
            });
    }, []);

    return (
        <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
            <h1>HiGames Test Page</h1>
            {loading ? (
                <p>Loading...</p>
            ) : data ? (
                <div>
                    <p>Message: {data.message}</p>
                    <p>Time: {data.time}</p>
                </div>
            ) : (
                <p>Error loading data</p>
            )}
        </div>
    );
}

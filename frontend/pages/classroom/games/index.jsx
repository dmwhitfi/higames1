import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const GamesListPage = () => {
    const router = useRouter();
    const [games, setGames] = useState([]);

    useEffect(() => {
        // Fetch available games
        const fetchGames = async () => {
            try {
                const response = await fetch('/api/classroom/games');
                const data = await response.json();
                setGames(data);
            } catch (error) {
                console.error('Error fetching games:', error);
            }
        };

        fetchGames();
    }, []);

    return (
        <div>
            <h1>Games</h1>
            <div>
                {games.map(game => (
                    <div key={game.id} onClick={() => router.push(`/classroom/games/${game.id}`)}>
                        {game.title}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GamesListPage;

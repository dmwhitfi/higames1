import { useRouter } from 'next/router';
import GameComponent from '../../../../src/apps/classroom/components/games/YourGame/GameComponent';

const GamePage = () => {
    const router = useRouter();
    const { gameId } = router.query;

    return (
        <div>
            <GameComponent gameId={gameId} />
        </div>
    );
};

export default GamePage;

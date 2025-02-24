import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import YourGameMain from './YourGameMain';
import Preloader from '../shared/Preloader';
import styles from './YourGameMain.module.css';

const GameComponent = () => {
    const [gameInstance, setGameInstance] = useState(null);
    const gameRef = useRef(null);

    useEffect(() => {
        let mounted = true;

        const createGame = async () => {
            try {
                // Cleanup any existing game
                if (gameInstance) {
                    gameInstance.destroy(true);
                }

                const templateId = 1; // Your game template ID
                const response = await fetch(`/api/classroom/games/templates/${templateId}/create`);
                const data = await response.json();
                const gameId = data.id;
                
                // Only create new game if component is still mounted
                if (!mounted) return;

                const config = {
                    type: Phaser.AUTO,
                    parent: 'phaser-game',
                    width: 1280,
                    height: 720,
                    backgroundColor: '#ffffff',
                    scene: [Preloader, YourGameMain],
                    callbacks: {
                        preBoot: (game) => {
                            game.registry.set('gameId', gameId);
                        }
                    }
                };

                const game = new Phaser.Game(config);
                setGameInstance(game);
                gameRef.current = game;
            } catch (error) {
                console.error('Error creating game:', error);
            }
        };

        createGame();

        return () => {
            mounted = false;
            if (gameInstance) {
                gameInstance.destroy(true);
            }
            gameRef.current = null;
        };
    }, []);

    return (
        <div className={styles.gameContainer}>
            <div id="phaser-game" className={styles.canvas} />
        </div>
    );
};

export default GameComponent;

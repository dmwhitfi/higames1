# Your Game Name

This is a Phaser game that integrates with the Academy System.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

## File Structure

```
your-game/
├── public/
│   └── YourGame/           # Game assets
│       ├── images/         # Image assets
│       ├── sprites/        # Sprite sheets
│       └── audio/         # Sound effects and music
└── src/
    └── apps/
        └── classroom/
            └── components/
                └── games/
                    └── YourGame/
                        ├── GameComponent.jsx    # React wrapper
                        └── YourGameMain.ts      # Main Phaser scene
```

## Development

1. Place your game assets in the appropriate folders under `public/YourGame/`
2. Implement your game logic in `YourGameMain.ts`
3. The game ID and other configuration will be passed through Phaser's registry

## Integration Notes

- The game receives its ID through `this.game.registry.get('gameId')`
- Use the provided API endpoints for game state management
- Follow the Academy System's game lifecycle (create -> start -> play -> end)

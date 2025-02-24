# HiGames Development Guide

## Important! Read This First
- 👋 New to game development? Don't worry! This guide will walk you through everything
- 🤖 When in doubt, ALWAYS ask the AI assistant! Better to check than to make mistakes
- 📝 Keep this guide open while you work - you'll refer to it often

## Part 1: Initial Setup 

### PostgreSQL Installation and Setup
🔍 Not sure about any step? Ask the AI assistant to explain in more detail!

1. Download PostgreSQL 17:
   - Go to https://www.enterprisedb.com/downloads/postgres-postgresql-downloads
   - Download PostgreSQL 17 for Windows
   - Save the installer file

2. Install PostgreSQL:
   - Run the downloaded installer
   - When asked for components, make sure "pgAdmin 4" is selected
   - Set a password for the postgres user (remember this password!)
   - Keep the default port (5432)
   - Complete the installation

3. Start PostgreSQL Server:
   - Press Windows + R
   - Type "services.msc" and press Enter
   - Find "postgresql-x64-17" in the list
   - Make sure its status is "Running"
   - If not running, right-click and select "Start"

4. First Time Database Setup:
   - Press Windows + R
   - Type "cmd" and press Enter
   - In the command prompt window that opens:

   RUN THIS COMMAND:
   psql -U postgres

   - When it asks for password, type the password you set during PostgreSQL installation

   RUN THIS COMMAND:
   CREATE DATABASE academy_db;

   - You should see "CREATE DATABASE"

   RUN THIS COMMAND:
   \q

5. Run Database Setup Script:
   - In the command prompt:

   RUN THIS COMMAND:
   cd path\to\HiGames\backend

   RUN THIS COMMAND:
   psql -U postgres -d academy_db -f setup/init.sql

   - When it asks for password, type the password you set during PostgreSQL installation
   - You should see messages about tables being created

### pgAdmin Setup
🔍 pgAdmin is a graphical tool to manage your PostgreSQL databases easily!

1. Launch pgAdmin:
   - Find and open "pgAdmin 4" from your Start menu
   - When it opens in your browser, it will ask for a master password
   - Set a master password you'll remember (this is different from PostgreSQL password)

2. Connect to Your Server:
   - In the left sidebar, find "Servers"
   - Right-click → Register → Server
   - In the "General" tab:
     - Name: LocalPostgres (or any name you like)
   - In the "Connection" tab:
     - Host: localhost
     - Port: 5432
     - Username: postgres
     - Password: (your PostgreSQL password from installation)
   - Click "Save"

3. Verify Database:
   - Expand "Servers" → "LocalPostgres" → "Databases"
   - You should see "academy_db" in the list
   - If you don't see it, ask the AI assistant!

### Server Setup
1. Install Backend Dependencies:
   - In the command prompt:

   RUN THIS COMMAND:
   cd backend
   
   RUN THIS COMMAND:
   npm install

2. Configure Environment:
   - We've created a `.env` file in the backend directory with all the necessary settings
   - The only thing you need to do is:
     - Open `backend/.env`
     - Find the line `DB_PASSWORD=your_password_here`
     - Replace `your_password_here` with your PostgreSQL password
     - Save the file

3. Start the Backend Server:
   - In the command prompt:

   RUN THIS COMMAND:
   npm run dev

   - You should see:
     "Backend server running on port 3001"
     "Database connection established successfully"

### Frontend Setup
1. Open a NEW Command Prompt:
   - Press Windows + R
   - Type "cmd" and press Enter
   - 💡 Keep your backend server running in the other window!

2. Install Frontend Dependencies:
   RUN THIS COMMAND:
   cd frontend

   RUN THIS COMMAND:
   npm install

3. Start the Frontend Server:
   RUN THIS COMMAND:
   npm run dev

   - You should see something like:
     ```
     ready - started server on 0.0.0.0:3000
     ```
   - Wait until you see this message before continuing!

4. View Your Site:
   - Open your web browser
   - Go to: http://localhost:3000
   - 🎮 You should see the HiGames homepage
   - 🔍 If you don't see it, ask the AI assistant!

5. Test Both Servers:
   - Backend should be running on: http://localhost:3001
   - Frontend should be running on: http://localhost:3000
   - ⚠️ BOTH servers must be running for games to work!
   - 🚨 If either server shows errors, ask the AI assistant!

6. Test the Integration:
   - We've created a test page for you at: http://localhost:3000/test
   - This page will show:
     ```
     HiGames Test Page
     Message: Hello from HiGames backend!
     Time: (current timestamp)
     ```
   - If you see this, both servers are working correctly! 🎉
   - If you see "Error loading data":
     - Open browser dev tools (F12)
     - Check the Console tab for errors
     - Make sure backend URL is correct in frontend/.env
     - Ask the AI assistant for help!

   Technical Details:
   - The test page calls: GET http://localhost:3001/api/test
   - Expected response:
     ```json
     {
       "message": "Hello from HiGames backend!",
       "time": "2025-02-24T15:00:00.000Z"
     }
     ```
   - 🔍 Show any errors to the AI assistant!

## Part 2: Game Development

### Development Workflow
⚠️ Important: Before starting any new step, if you're unsure about ANYTHING, ask the AI assistant!

1. First, use Phaser Editor to design your game:
   - Download Phaser Editor from: https://phasereditor2d.com/
   - 🎮 New to Phaser Editor? Ask the AI assistant for a quick tutorial!
   - Create and design your game in Phaser Editor
   - Test it works in Phaser Editor first
   - Export your game files
   - 🤔 Not sure how to export? Ask the AI assistant!

2. Then, integrate into our system:
   - 🚨 Before copying files, show your folder structure to the AI assistant to confirm it's correct!
   - Copy your exported game files into our folder structure:
     ```
     frontend/src/apps/classroom/components/games/YourGame/
     ├── GameComponent.tsx    # React wrapper (we provide this)
     ├── scenes/             # Your Phaser scenes from Phaser Editor
     │   ├── Level1.ts
     │   ├── Level2.ts
     │   └── etc...
     └── assets/            # Your game assets from Phaser Editor
     ```

   - Move your game assets to:
     ```
     frontend/public/YourGame/
     ├── images/
     ├── sprites/
     ├── audio/
     └── fonts/
     ```
   - 🎯 Show the AI assistant your asset organization to make sure it's right!

3. Update Asset Paths:
   - 🔄 This step is crucial! Show the AI assistant your file changes before saving!
   - In your Phaser Editor exported files, update asset paths to match our structure
   - Example:
     ```typescript
     // Original Phaser Editor path:
     this.load.image('player', 'assets/player.png');
     
     // Change to our structure:
     this.load.image('player', '/YourGame/images/player.png');
     ```

### Understanding File Types
1. TypeScript Files (.ts and .tsx):
   - Use .ts for pure TypeScript files (your game logic)
   - Use .tsx for files that include React components
   - Example: YourGameMain.ts for your Phaser game code
   - Example: GameComponent.tsx for your React wrapper

2. Why TypeScript?
   - Gives you better error checking
   - Helps prevent bugs
   - Makes code easier to understand
   - Works perfectly with our Next.js setup

### Creating Your First Game

1. Set Up Your Game Files:
   - Go to frontend/src/apps/classroom/components/games/
   - Create a new folder with your game name (example: "MemoryGame")
   - Inside your game folder, create these files:
     ```
     MemoryGame/
     ├── GameComponent.tsx    # Your React wrapper
     ├── YourGameMain.ts      # Your Phaser game code
     └── types.ts            # Your TypeScript types
     ```

2. Basic Game Component (GameComponent.tsx):
   ```tsx
   import { useEffect, useRef } from 'react';
   import Phaser from 'phaser';
   import YourGameMain from './YourGameMain';

   export default function GameComponent() {
     const gameRef = useRef<Phaser.Game | null>(null);

     useEffect(() => {
       // Game configuration
       const config: Phaser.Types.Core.GameConfig = {
         type: Phaser.AUTO,
         width: 1280,
         height: 720,
         parent: 'game-container',
         backgroundColor: '#ffffff',
         scene: YourGameMain
       };

       // Create the game
       gameRef.current = new Phaser.Game(config);

       // Cleanup when component unmounts
       return () => {
         if (gameRef.current) {
           gameRef.current.destroy(true);
         }
       };
     }, []);

     return <div id="game-container" />;
   }
   ```

3. Basic Game Scene (YourGameMain.ts):
   ```typescript
   export default class YourGameMain extends Phaser.Scene {
     constructor() {
       super('YourGameMain');
     }

     preload() {
       // CORRECT way to load assets:
       this.load.image('background', '/YourGame/images/background.png');
       // WRONG way:
       // this.load.image('background', './images/background.png');
     }

     create() {
       // Your game setup code here
     }

     update() {
       // Your game loop code here
     }
   }
   ```

### Adding Assets

1. Create Asset Folders:
   ```
   frontend/public/YourGame/
   ├── images/          # For .png and .jpg files
   ├── sprites/         # For sprite sheets
   ├── audio/          # For sound files
   └── fonts/          # For custom fonts
   ```

2. Image Types to Use:
   - Use PNG for:
     - Sprites that need transparency
     - UI elements
     - Game objects with sharp edges
   - Use JPG for:
     - Background images
     - Photos
     - Images without transparency

3. Loading Assets:
   ```typescript
   preload() {
     // Images
     this.load.image('background', '/YourGame/images/background.jpg');
     
     // Sprite sheets
     this.load.spritesheet('player', '/YourGame/sprites/player.png', {
       frameWidth: 32,
       frameHeight: 48
     });
     
     // Audio
     this.load.audio('music', '/YourGame/audio/background.mp3');
   }
   ```

### Connecting to the Backend

1. Making API Calls:
   ```typescript
   // In your game scene
   async saveScore(score: number) {
     try {
       const response = await fetch('/api/games/save-score', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({ score })
       });
       
       if (!response.ok) {
         throw new Error('Failed to save score');
       }
       
       const data = await response.json();
       console.log('Score saved:', data);
     } catch (error) {
       console.error('Error saving score:', error);
     }
   }
   ```

2. Available API Endpoints:
   ```typescript
   // Create a new game
   POST /api/classroom/games/templates/:templateId/create
   
   // Start a game
   GET /api/classroom/games/:gameId/start
   
   // Save game results
   POST /api/classroom/games/:gameId/results
   ```

### Testing Your Game
🧪 Before running ANY commands, show them to the AI assistant first!

1. Start Both Servers:
   - Open two command prompts
   - 💡 Not sure how to open command prompt? Ask the AI assistant!
   
   In first prompt:
   RUN THIS COMMAND:
   cd backend && npm run dev
   
   In second prompt:
   RUN THIS COMMAND:
   cd frontend && npm run dev

2. View Your Game:
   - Open browser to http://localhost:3000/test
   - 🔍 Not seeing your game? Show the AI assistant your browser console!

### Common Problems
If you run into ANY of these issues, immediately ask the AI assistant:
- Game doesn't appear
- Assets don't load
- Console shows errors
- Commands don't work
- Files won't copy
- Paths don't match

### Best Practices
🌟 Pro Tip: When in doubt about ANY of these, ask the AI assistant:

1. File Organization:
   - Keep all game files in your game folder
   - Put all assets in public/YourGame/
   - Use clear, descriptive file names
   - 📁 Show the AI your folder structure if unsure!

2. Code Changes:
   - Always test in Phaser Editor first
   - Show the AI assistant your changes before saving
   - If something breaks, don't panic - ask the AI!

Need help? The AI assistant is here 24/7! Just ask! 🤖👍

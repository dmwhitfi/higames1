const express = require('express');
const router = express.Router();
const gamesController = require('../../controllers/classroom/games');

// Game template routes
router.post('/templates/:templateId/create', gamesController.createGameFromTemplate);

// Game routes
router.get('/', gamesController.getGames);
router.get('/:id', gamesController.getGame);

module.exports = router;

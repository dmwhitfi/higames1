const ClassroomGame = require('../../../models/ClassroomGame');
const GameTemplate = require('../../../models/GameTemplate');

// Create a new game from template
const createGameFromTemplate = async (req, res) => {
    try {
        const { templateId } = req.params;
        const template = await GameTemplate.findByPk(templateId);
        
        if (!template) {
            return res.status(404).json({ error: 'Template not found' });
        }

        const game = await ClassroomGame.create({
            templateId,
            title: template.name,
            description: template.description,
            createdBy: req.user.id, // You'll need to handle authentication
            content: template.defaultContent,
            config: template.config
        });

        res.json(game);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all games
const getGames = async (req, res) => {
    try {
        const games = await ClassroomGame.findAll({
            where: { isPublic: true },
            order: [['createdAt', 'DESC']]
        });
        res.json(games);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a specific game
const getGame = async (req, res) => {
    try {
        const { id } = req.params;
        const game = await ClassroomGame.findByPk(id);
        
        if (!game) {
            return res.status(404).json({ error: 'Game not found' });
        }

        res.json(game);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createGameFromTemplate,
    getGames,
    getGame
};

const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const GameTemplate = sequelize.define('classroom_game_template', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    type: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    config: {
        type: DataTypes.JSONB,
        allowNull: true,
        defaultValue: {}
    },
    defaultContent: {
        type: DataTypes.JSONB,
        allowNull: true,
        defaultValue: {}
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    difficulty: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: 'beginner'
    },
    tags: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
        defaultValue: []
    }
}, {
    tableName: 'classroom_game_templates',
    timestamps: true,
    underscored: false
});

module.exports = GameTemplate;

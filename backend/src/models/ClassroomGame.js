const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const ClassroomGame = sequelize.define('classroom_game', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    templateId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    content: {
        type: DataTypes.JSONB,
        allowNull: true,
        defaultValue: {}
    },
    config: {
        type: DataTypes.JSONB,
        allowNull: true,
        defaultValue: {}
    },
    isPublic: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    status: {
        type: DataTypes.STRING(20),
        allowNull: false,
        defaultValue: 'draft'
    },
    tags: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
        defaultValue: []
    }
}, {
    tableName: 'classroom_games',
    timestamps: true,
    underscored: false
});

module.exports = ClassroomGame;

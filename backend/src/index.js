require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { sequelize } = require('./config/database');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true
}));
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Test route
app.get('/api/test', (req, res) => {
    res.json({ 
        message: 'Hello from HiGames backend!',
        time: new Date().toISOString()
    });
});

// Health check route
app.get('/health', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running' });
});

// Database connection and server start
sequelize.authenticate()
    .then(() => {
        console.log('Database connection established successfully.');
        app.listen(PORT, () => {
            console.log(`Backend server running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
        // Still start the server even if DB fails
        app.listen(PORT, () => {
            console.log(`Backend server running on port ${PORT} (DB connection failed)`);
        });
    });

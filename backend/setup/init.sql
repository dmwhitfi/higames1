-- Create the database
CREATE DATABASE academy_db;

-- Connect to the database
\c academy_db;

-- Create game templates table
CREATE TABLE classroom_game_templates (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL,
    description TEXT,
    config JSONB DEFAULT '{}',
    defaultContent JSONB DEFAULT '{}',
    isActive BOOLEAN DEFAULT true,
    difficulty VARCHAR(50) DEFAULT 'beginner',
    tags VARCHAR[] DEFAULT '{}',
    "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create games table
CREATE TABLE classroom_games (
    id SERIAL PRIMARY KEY,
    templateId INTEGER NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    createdBy INTEGER NOT NULL,
    content JSONB DEFAULT '{}',
    config JSONB DEFAULT '{}',
    isPublic BOOLEAN DEFAULT false,
    status VARCHAR(20) DEFAULT 'draft',
    tags VARCHAR[] DEFAULT '{}',
    "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (templateId) REFERENCES classroom_game_templates(id)
);

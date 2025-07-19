// server/server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // For cross-origin requests
const connectDB = require('./config/db');

// Load env vars
dotenv.config({ path: './.env' });

// Connect to database
connectDB();

const app = express();

// Body parser (to parse JSON requests)
app.use(express.json());

// Enable CORS
app.use(cors({
  origin: process.env.CORS_ORIGIN // Allow only your frontend to access
}));

// Import routes
const projects = require('./routes/projects'); // We'll create this

// Mount routers
app.use('/api/v1/projects', projects); // API endpoint for projects

// Simple route for testing
app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
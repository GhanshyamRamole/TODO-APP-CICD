const tools = require("./routes/tools");
const connection = require("./db");
const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require('mongoose');

// Database Connection
connection();

// Middleware
app.use(express.json());
app.use(cors());

// Health Checks (Vital for Kubernetes/AWS Load Balancers)
app.get('/healthz', (req, res) => res.status(200).send('Healthy'));
app.get('/ready', (req, res) => {
    const isDbConnected = mongoose.connection.readyState === 1;
    isDbConnected ? res.status(200).send('Ready') : res.status(503).send('Not Ready');
});
app.get('/started', (req, res) => res.status(200).send('Started'));

// Application Routes
app.use("/api/tools", tools);

const port = process.env.PORT || 3500;
app.listen(port, () => console.log(`🚀 DevOps Arsenal running on port ${port}...`));

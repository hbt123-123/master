const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
require('express-async-errors');

const apiRoutes = require('./src/routes/api');

const app = express();

// Configuration
const port = process.env.PORT || 8000;
const allowedOrigins = process.env.CORS_ALLOW_ORIGINS 
  ? process.env.CORS_ALLOW_ORIGINS.split(',').map(o => o.trim())
  : ['http://localhost:8000'];

const corsOptions = {
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use('/static', express.static(path.join(__dirname, 'static')));

// API Routes
app.use('/', apiRoutes);

// Frontend Routes
app.get('/', (req, res) => {
  res.redirect('/service/bazi');
});

app.get('/service/:module_id', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(`Unhandled server error path=${req.path}`, err.message);
  if (err.name === 'ZodError') {
    return res.status(422).json({ detail: err.errors });
  }
  if (err.status) {
    return res.status(err.status).json({ detail: err.message });
  }
  res.status(500).json({ detail: 'Internal Server Error' });
});

const bindAddress = process.env.NODE_ENV === 'production' ? '127.0.0.1' : '0.0.0.0';
app.listen(port, bindAddress, () => {
  console.log(`Master Node.js server running on http://${bindAddress === '127.0.0.1' ? 'localhost' : '0.0.0.0'}:${port}`);
});

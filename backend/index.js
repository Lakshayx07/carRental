require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth');
const bookingRoutes = require('./routes/booking');

const app = express();
const PORT = process.env.PORT || 5002;
// app.use((req, res, next) => {
//   console.log(`[${req.method}] ${req.url}`);
//   next();
// });

app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://car-rental-nu-silk.vercel.app'
  ],
  credentials: true
}));
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.error('MongoDB connection error:', err.message);
});

// Handle CORS preflight for all routes (Express 5+)


// Fallback catch-all for OPTIONS (for older Express versions or edge cases)
// app.use((req, res, next) => {
//   if (req.method === 'OPTIONS') {
//     res.header('Access-Control-Allow-Origin', process.env.FRONTEND_ORIGIN || 'http://localhost:3000');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     res.header('Access-Control-Allow-Credentials', 'true');
//     return res.sendStatus(200);
//   }
//   next();
// });

app.use('/api/auth', authRoutes);
app.use('/api/booking', bookingRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Auth backend running' });
});
console.log('Auth backend initialized');
// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

// API health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running and reachable.' });
});

// No DB connection needed for dev
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

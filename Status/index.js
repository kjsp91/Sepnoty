require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
const statusRoutes = require('./routes/status');
const authRoutes = require('./routes/auth');
const searchRoutes = require('./routes/search');

app.use('/api', statusRoutes);
app.use('/api', authRoutes);
app.use('/api', searchRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

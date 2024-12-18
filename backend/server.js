// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const expenseRoutes = require('./routes/expense');
const cors = require('cors');
const { ensureAuthentication } = require('./Middleware/AuthMiddleware');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS for all routes
// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('MongoDB connection error:', err));

app.use('/api/auth', authRoutes);
app.use('/api/expense', ensureAuthentication, expenseRoutes);
app.get('/', (req, res) => {
  res.send("Welcome to SpendSherpa API");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

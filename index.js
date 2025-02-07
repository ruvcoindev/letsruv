const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const userRoutes = require('./routes/userRoutes');
const transactionRoutes = require('./routes/transactionRoutes');

const app = express();
app.use(bodyParser.json());

// Connect to DB
connectDB();

// Routes
app.use('/api/users', userRoutes);
app.use('/api/transactions', transactionRoutes);

// Start server
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

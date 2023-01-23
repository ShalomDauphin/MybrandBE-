const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const colors = require('colors');

dotenv.config({ path: './config/config.env' });

const app = express();

// Connect Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/profile', require('./routes/profile'));
app.use('/api/posts', require('./routes/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`.yellow);
  console.log('Connected to the BackEnd!!');
});

const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

connectDB();

const user = require('./routes/todoItemRoutes');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use('/api/v1/todolist', user);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
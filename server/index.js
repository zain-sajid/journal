// imports
const express = require('express');
require('dotenv').config();

// declaring
const app = express();
const port = 5000;
const host = '127.0.0.1';

// middleware
app.use(express.json());

const userRouter = require('./routes/user.routes');
app.use(userRouter);

// Check if port is listening
app.listen(port, host, () => {
  console.log(`Server started at host ${host} and ${port}`);
});

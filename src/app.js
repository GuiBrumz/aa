const express = require('express');
const dotenv = require('dotenv').config;
const taskRouter = require('./routes/taskRouter');
const cors = require('cors');
const app = express();
const path = require('path');
const fs = require('fs');
const fileUpload = require('express-fileupload');

const usersRouter = require('./routes/userRouter');
const loginRouter = require('../routes/loginRouter');
const empresasRouter = require('./routes/empresasRouter');

app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(cors());
app.use('/api', taskRouter);
app.use(fileUpload());

app.use('/uploads', express.static(path.join(__dirname, "uploads")))
app.use('/api', usersRouter);
app.use('/api', loginRouter);
app.use('/api', taskRouter);

module.exports = app; 

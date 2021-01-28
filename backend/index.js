const express = require('express');
const cors = require('cors');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userModel = require('./src/models/userModel');
const userRoutes = require('./src/routes/userRoutes')(userModel);

const postModel = require('./src/models/postModel');
const postRoutes = require('./src/routes/postRoutes')(postModel);

const favModel = require('./src/models/favsModel');
const favRoutes = require('./src/routes/favRoutes')(favModel);

const app = express();
app.use(cors());

const port = process.env.PORT || 1297;

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const DBURL = 'mongodb://localhost/plottergramdb';
mongoose.connect(DBURL, { useNewUrlParser: true }, { useUnifiedTopology: true });

app.use('/user', userRoutes);
app.use('/posts', postRoutes);
app.use('/favs', favRoutes);

app.listen(port, () => {
  debug(`Server is running on port ${chalk.blue(port)}`);
});

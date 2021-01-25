const express = require('express');
const cors = require('cors');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());

const port = process.env.PORT || 1297;

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
  debug(`Server is running on port ${chalk.blue(port)}`);
});

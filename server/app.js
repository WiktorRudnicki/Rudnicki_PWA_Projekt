const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');
const cors = require('cors');
const routes = require('./routes/routes.js');
const bodyParser = require('body-parser');

require('colors');
require('dotenv').config();

const app = express();

app.use(
    bodyParser.urlencoded({
      limit: '15mb',
      extended: false,
      type: '',
    }),
  );
  app.use(bodyParser.json({ limit: '5mb' }));

app.use(morgan('dev'));

app.use(helmet());

app.use(cors());

app.use(express.static(path.join(__dirname, '/public')));

app.use(express.json());

app.use('/', routes);

app.get('/test', (req, res) => res.send('Yeah, you reached the test route!'));

const PORT = process.env.PORT ?? 5000;

app.listen(PORT);

const express = require('express');

const cookieParser = require('cookie-parser');
const logger = require('morgan');

const routes = require('./routes');

class AppController {
  constructor() {
    this.express = express();

    this
      .middlewares()
      .routes();
  }

  /**
   * Define os middlewares
   */
  middlewares() {
    this.express.use(logger('dev'));
    this.express.use(cookieParser());
    this.express.use(express.json());

    return this;
  }

  /**
   * Define as rotas
   */
  routes() {
    this.express.use(routes);

    return this;
  }
}

module.exports = new AppController().express;

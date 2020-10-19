const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const morgan = require('morgan');

const userRouter = require('./resources/users/user.router');
const boardRouter = require('./resources/boards/board.router');
const taskRouter = require('./resources/tasks/task.router');

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

morgan.token('query', req => JSON.stringify(req.query));

morgan.token('body', req => JSON.stringify(req.body));

app.use(
  morgan(
    'error: :method :status :url Query :query Body :body - :response-time ms',
    {
      skip(req, res) {
        return res.statusCode < 400;
      }
    }
  )
);

app.use(
  morgan(
    'info: :method :status :url Query :query Body :body - :response-time ms',
    {
      skip(req, res) {
        return res.statusCode > 400;
      }
    }
  )
);

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }

  next();
});

app.use('/users', userRouter);
app.use('/boards', boardRouter);
boardRouter.use('/:boardId/tasks', taskRouter);

process
  .on('unhandledRejection', (reason, p) => {
    console.error(reason, p);
  })
  .on('uncaughtException', err => {
    console.error(err);
  });

module.exports = app;

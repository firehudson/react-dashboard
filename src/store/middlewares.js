import { createLogger } from 'redux-logger';
import { sagaMiddleware } from '../sagas';

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const middlewares = [
  logger,
  sagaMiddleware,
];

export default middlewares;

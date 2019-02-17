import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';
import { sagaMiddleware } from '../sagas';
import history from '../routes/history';

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const connectedRouterMiddleware = routerMiddleware(history);

const middlewares = [
  logger,
  connectedRouterMiddleware,
  sagaMiddleware,
];

export default middlewares;

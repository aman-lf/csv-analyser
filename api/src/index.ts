import './env';
import './db';

import express from 'express';
import cors from 'cors';

import logger from './utils/logger';
import routes from './routes';
import * as errorHandler from './middlewares/errorHandler';

const app = express();

app.set('port', process.env.APP_PORT);
app.set('host', process.env.APP_HOST);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler.bodyParser);

app.use('/', routes);

// Error Middleware
app.use(errorHandler.genericErrorHandler);
app.use(errorHandler.methodNotAllowed);

app.listen(app.get('port'), app.get('host'), () => {
  logger.info(`Server started at http://${app.get('host')}:${app.get('port')}/`);
});

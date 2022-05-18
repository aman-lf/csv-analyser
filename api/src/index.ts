import './env';
import './db';

import express from 'express';

import logger from './utils/logger';
import routes from './routes';

const app = express();

app.set('port', process.env.APP_PORT);
app.set('host', process.env.APP_HOST);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', routes);

app.listen(app.get('port'), app.get('host'), () => {
  logger.info(`Server started at http://${app.get('host')}:${app.get('port')}/`);
});

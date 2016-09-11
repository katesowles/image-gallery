import angular  from 'angular';
import app from './app';
import routes from './routes';
import http from './http';
import auth from './auth';
import './scss/main.scss';

const module = angular.module(app);

module.config(http);
module.config(routes);
module.run(auth);
module.value('apiUrl', process.env.API_URL || '/api');

angular.bootstrap(document, [app]);

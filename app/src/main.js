import angular  from 'angular';
import app from './app';
import routes from './routes';
import './scss/main.scss';

const module = angular.module(app);

module.config(routes);
module.value('apiUrl', process.env.API_URL || '/api');

angular.bootstrap(document, [app]);

import angular  from 'angular';
import gallery from './gallery';
import routes from './routes';
import './scss/main.scss';

const module = angular.module(gallery);

module.config(routes);
module.value('apiUrl', process.env.API_URL || '/api');

angular.bootstrap(document, [gallery]);

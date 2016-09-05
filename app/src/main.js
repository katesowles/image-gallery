import angular  from 'angular';
import gallery from './gallery';
import './scss/main.scss';

const module = angular.module(gallery);

module.value('apiUrl', process.env.API_URL || '/api');

angular.bootstrap(document, [gallery]);

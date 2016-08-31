import angular from 'angular';
import app from './app';
import './scss/main.scss';
import 'angular-material/angular-material.css';

const module = angular.module(app);

//TODO update the fallback value later
module.value('apiUrl', process.env.API_URL || '/api');

angular.bootstrap(document, [app]);

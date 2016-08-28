import angular from 'angular';
import components from './components';
import md from 'angular-material';

const app = angular.module('myApp', [components, md]);

export default app.name;

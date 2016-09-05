import angular from 'angular';
import components from './components';
import services from './services';

const app = angular.module('gallery', [components, services]);

export default app.name;

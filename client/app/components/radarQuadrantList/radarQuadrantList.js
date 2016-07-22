import angular from 'angular';
import uiRouter from 'angular-ui-router';
import radarQuadrantListComponent from './radarQuadrantList.component';

let radarQuadrantListModule = angular.module('radarQuadrantList', [
  uiRouter
])

.component('radarQuadrantList', radarQuadrantListComponent)

.name;

export default radarQuadrantListModule;

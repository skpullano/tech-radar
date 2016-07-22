import angular from 'angular';
import uiRouter from 'angular-ui-router';
import radarQuadrantMapComponent from './radarQuadrantMap.component';

let radarQuadrantMapModule = angular.module('radarQuadrantMap', [
  uiRouter
])

.component('radarQuadrantMap', radarQuadrantMapComponent)

.name;

export default radarQuadrantMapModule;

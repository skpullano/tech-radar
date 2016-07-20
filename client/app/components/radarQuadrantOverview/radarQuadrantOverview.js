import angular from 'angular';
import uiRouter from 'angular-ui-router';
import radarQuadrantOverviewComponent from './radarQuadrantOverview.component';

let radarQuadrantOverviewModule = angular.module('radarQuadrantOverview', [
  uiRouter
])

.component('radarQuadrantOverview', radarQuadrantOverviewComponent)

.name;

export default radarQuadrantOverviewModule;

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import radarOverviewComponent from './radarOverview.component';

let radarOverviewModule = angular.module('radarOverview', [
  uiRouter
])

.component('radarOverview', radarOverviewComponent)

.name;

export default radarOverviewModule;

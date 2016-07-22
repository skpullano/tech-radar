import angular from 'angular';
import uiRouter from 'angular-ui-router';
import radarQuadrantDetailComponent from './radarQuadrantDetail.component';

let radarQuadrantDetailModule = angular.module('radarQuadrantDetail', [
  uiRouter
])
.config(($stateProvider, $urlRouterProvider) => {
      "ngInject";

      $stateProvider
          .state('quadrant', {
            url: '/radar/:quadrantid',
            component: 'radarQuadrantDetail'
          });
})
.component('radarQuadrantDetail', radarQuadrantDetailComponent)

.name;

export default radarQuadrantDetailModule;

import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import RadarOverview from './radarOverview/radarOverview'
import RadarQuadrantOverview from './radarQuadrantOverview/radarQuadrantOverview'

let componentModule = angular.module('app.components', [
  Home,
  About,
  RadarOverview,
  RadarQuadrantOverview
])
  
.name;

export default componentModule;

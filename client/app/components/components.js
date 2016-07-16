import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import RadarOverview from './radarOverview/radarOverview'

let componentModule = angular.module('app.components', [
  Home,
  About,
  RadarOverview
])
  
.name;

export default componentModule;

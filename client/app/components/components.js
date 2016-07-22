import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import RadarOverview from './radarOverview/radarOverview'
import RadarQuadrantOverview from './radarQuadrantOverview/radarQuadrantOverview'
import RadarQuadrantDetail from './radarQuadrantDetail/radarQuadrantDetail'
import RadarQuadrantList from './radarQuadrantList/radarQuadrantList'
import RadarQuadrantMap from './radarQuadrantMap/radarQuadrantMap'

let componentModule = angular.module('app.components', [
  Home,
  About,
  RadarOverview,
  RadarQuadrantOverview,
  RadarQuadrantDetail,
  RadarQuadrantList,
  RadarQuadrantMap
])
  
.name;

export default componentModule;

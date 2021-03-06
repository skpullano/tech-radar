import template from './radarQuadrantMap.html';
import controller from './radarQuadrantMap.controller';
import './radarQuadrantMap.scss';

let radarQuadrantMapComponent = {
  restrict: 'E',
  bindings: {
    quadrantType: "@"
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default radarQuadrantMapComponent;

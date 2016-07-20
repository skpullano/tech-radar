import template from './radarQuadrantOverview.html';
import controller from './radarQuadrantOverview.controller';
import './radarQuadrantOverview.scss';

let radarQuadrantOverviewComponent = {
  restrict: 'E',
  transclude: true,
  require: {
    radarOverviewContainer : "^radarOverview"
  },
  bindings: {
    name: "@"
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default radarQuadrantOverviewComponent;

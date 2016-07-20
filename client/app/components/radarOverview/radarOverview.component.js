import template from './radarOverview.html';
import controller from './radarOverview.controller';
import './radarOverview.scss';

let radarOverviewComponent = {
  restrict: 'E',
  transclude: true,
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default radarOverviewComponent;

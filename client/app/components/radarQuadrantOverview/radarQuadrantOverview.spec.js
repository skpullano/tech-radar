import RadarQuadrantOverviewModule from './radarQuadrantOverview'
import RadarQuadrantOverviewController from './radarQuadrantOverview.controller';
import RadarQuadrantOverviewComponent from './radarQuadrantOverview.component';
import RadarQuadrantOverviewTemplate from './radarQuadrantOverview.html';

describe('RadarQuadrantOverview', () => {
  let $rootScope, makeController;

  beforeEach(window.module(RadarQuadrantOverviewModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new RadarQuadrantOverviewController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(RadarQuadrantOverviewTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = RadarQuadrantOverviewComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(RadarQuadrantOverviewTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(RadarQuadrantOverviewController);
      });
  });
});

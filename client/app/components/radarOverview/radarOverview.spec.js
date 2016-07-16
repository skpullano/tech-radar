import RadarOverviewModule from './radarOverview'
import RadarOverviewController from './radarOverview.controller';
import RadarOverviewComponent from './radarOverview.component';
import RadarOverviewTemplate from './radarOverview.html';

describe('RadarOverview', () => {
  let $rootScope, makeController;

  beforeEach(window.module(RadarOverviewModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new RadarOverviewController();
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
      expect(RadarOverviewTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = RadarOverviewComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(RadarOverviewTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(RadarOverviewController);
      });
  });
});

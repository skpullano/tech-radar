import RadarQuadrantListModule from './radarQuadrantList'
import RadarQuadrantListController from './radarQuadrantList.controller';
import RadarQuadrantListComponent from './radarQuadrantList.component';
import RadarQuadrantListTemplate from './radarQuadrantList.html';

describe('RadarQuadrantList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(RadarQuadrantListModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new RadarQuadrantListController();
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
      expect(RadarQuadrantListTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = RadarQuadrantListComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(RadarQuadrantListTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(RadarQuadrantListController);
      });
  });
});

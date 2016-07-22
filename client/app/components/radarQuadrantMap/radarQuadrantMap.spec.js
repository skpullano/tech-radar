import RadarQuadrantMapModule from './radarQuadrantMap'
import RadarQuadrantMapController from './radarQuadrantMap.controller';
import RadarQuadrantMapComponent from './radarQuadrantMap.component';
import RadarQuadrantMapTemplate from './radarQuadrantMap.html';

describe('RadarQuadrantMap', () => {
  let $rootScope, makeController;

  beforeEach(window.module(RadarQuadrantMapModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new RadarQuadrantMapController();
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
      expect(RadarQuadrantMapTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = RadarQuadrantMapComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(RadarQuadrantMapTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(RadarQuadrantMapController);
      });
  });
});

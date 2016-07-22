import RadarQuadrantDetailModule from './radarQuadrantDetail'
import RadarQuadrantDetailController from './radarQuadrantDetail.controller';
import RadarQuadrantDetailComponent from './radarQuadrantDetail.component';
import RadarQuadrantDetailTemplate from './radarQuadrantDetail.html';

describe('RadarQuadrantDetail', () => {
  let $rootScope, makeController;

  beforeEach(window.module(RadarQuadrantDetailModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new RadarQuadrantDetailController();
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
      expect(RadarQuadrantDetailTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = RadarQuadrantDetailComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(RadarQuadrantDetailTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(RadarQuadrantDetailController);
      });
  });
});

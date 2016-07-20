class RadarQuadrantOverviewController {
  constructor() {
    this.name = 'radarQuadrantOverview';

    this.$onInit = function() {
      this.radarOverviewContainer.addQuadrant(this);
      console.log(this);
    };
  }
}

export default RadarQuadrantOverviewController;

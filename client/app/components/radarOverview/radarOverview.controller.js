class RadarOverviewController {
  constructor() {
    this.name = 'radarOverview';

    var quadrants = this.quadrants = [];

    this.addQuadrant = function(quadrant) {
      quadrants.push(quadrant);
    };
  }
}

export default RadarOverviewController;

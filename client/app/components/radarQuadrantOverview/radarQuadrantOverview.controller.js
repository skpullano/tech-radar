class RadarQuadrantOverviewController {
  constructor() {

    this.friendlyName = this.name.split(' ').join('-').toLowerCase();
    this.$onInit = function() {
      this.radarOverviewContainer.addQuadrant(this);

    };


  }
}

RadarQuadrantOverviewController.$inject = [

];

export default RadarQuadrantOverviewController;

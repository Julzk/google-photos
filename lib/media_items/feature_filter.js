'use strict';

class FeatureFilter {
  constructor() {
    this.includedFeatures = [];
  }

  addFeature(feature) {
    this.includedFeatures.push(feature);
  }

  toJSON() {
    return {
      includedFeatures: this.includedFeatures,
    };
  }
}

module.exports = FeatureFilter;

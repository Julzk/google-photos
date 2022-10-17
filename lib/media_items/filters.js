'use strict';

const DateFilter = require('../common/date_filter');
const MediaTypeFilter = require('./media_type_filter');
const ContentFilter = require('./content_filter');
const FeatureFilter = require('./feature_filter');

class Filters {
  constructor(includeArchivedMedia = false) {
    this.includeArchivedMedia = includeArchivedMedia;
  }

  setDateFilter(dateFilter) {
    this.dateFilter = dateFilter;
    return this;
  }

  setContentFilter(contentFilter) {
    this.contentFilter = contentFilter;
    return this;
  }

  setMediaTypeFilter(mediaTypeFilter) {
    this.mediaTypeFilter = mediaTypeFilter;
    return this;
  }

  setFeatureFilter(featureFilter) {
    this.featureFilter = featureFilter;
    return this;
  }

  setIncludeArchivedMedia(includeArchivedMedia) {
    this.includeArchivedMedia = includeArchivedMedia;
    return this;
  }

  toJSON() {
    return {
      dateFilter:
        this.dateFilter instanceof DateFilter ? this.dateFilter.toJSON() : this.dateFilter,
      mediaTypeFilter:
        this.mediaTypeFilter instanceof MediaTypeFilter
          ? this.mediaTypeFilter.toJSON()
          : this.mediaTypeFilter,
      contentFilter:
        this.contentFilter instanceof ContentFilter
          ? this.contentFilter.toJSON()
          : this.contentFilter,
      includeArchivedMedia: this.includeArchivedMedia,
      featureFilter:
        this.featureFilter instanceof FeatureFilter
          ? this.featureFilter.toJSON()
          : this.featureFilter,
    };
  }
}

module.exports = Filters;

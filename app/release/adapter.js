import ApplicationAdapter from '../application/adapter';

export default ApplicationAdapter.extend({
  urlForQuery (query, modelName) {
    let { labelId, artistId } = query;
    let baseUrl;

    if (labelId) {
      baseUrl = this.buildURL('labels', labelId);
    } else {
      baseUrl = this.buildURL('artists', artistId);
    }

    return `${baseUrl}/releases`;
  }
});

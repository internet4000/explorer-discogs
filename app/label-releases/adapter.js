import ApplicationAdapter from '../application/adapter';

export default ApplicationAdapter.extend({
  urlForFindRecord (id, modelName, snapshot) {
    let baseUrl = this.buildURL('labels', id, snapshot);
    return `${baseUrl}/releases`;
  },
  urlForQuery (query, modelName) {
    let baseUrl = this.buildURL('labels', query.id);
    return `${baseUrl}/releases`;
  }
});

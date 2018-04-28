import ApplicationAdapter from '../application/adapter';

export default ApplicationAdapter.extend({
  urlForFindRecord (id, modelName, snapshot) {
    let baseUrl = this.buildURL('artists', id, snapshot);
    return `${baseUrl}/releases`;
  }
});

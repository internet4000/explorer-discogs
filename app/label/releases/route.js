import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    }
  },
  model(params) {
    const id = this.modelFor('label').get('id');
    return this.store.query('labelReleases', {
      id,
      page: params.page,
      per_page: params.perPage
    });
  }
});

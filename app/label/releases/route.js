import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    }
  },
  model(params) {
    const labelId = this.modelFor('label').get('id');
    return this.store.query('release', {
      labelId: labelId,
      page: params.page,
      per_page: params.perPage
    });
  }
});

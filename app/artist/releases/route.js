import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    }
  },
  model(params) {
    const artistId = this.modelFor('artist').get('id');

    return this.store.query('release', {
      artistId,
      page: params.page,
      per_page: params.perPage
    });
  }
});

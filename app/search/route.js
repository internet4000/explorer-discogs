import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    type: {refreshModel: true},
    query: {refreshModel: true},
    page: {refreshModel: true}
  },
  model(params) {
    if (params.query) {
      return this.store.query('searchQuery', {
        q: params.query,
        page: params.page,
        per_page: params.perPage,
        type: params.type
      }).catch(err => {
        console.log(err)
      })
    }
  }
});

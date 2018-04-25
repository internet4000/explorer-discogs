import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    search: {
      refreshModel: true
    }
  },
  model(params) {
    if (params.search) {
      return this.get('store').query('searchQuery', {
        q: params.search
      });
    }
  }
});

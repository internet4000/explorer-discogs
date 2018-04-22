import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let search = this.get('store').query('searchQuery', {
      q: 'nirvana'
    });
    return search;
  }
});

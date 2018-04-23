import DS from 'ember-data';
import AdapterFetch from 'ember-fetch/mixins/adapter-fetch'

export default DS.RESTAdapter.extend(AdapterFetch, {
  host: 'https://api.discogs.com',

  // https://github.com/ember-cli/eslint-plugin-ember/blob/master/docs/rules/avoid-leaking-state-in-ember-objects.md
  init() {
    this._super(...arguments);
    this.headers = {}
    this.headers['User-Agent'] = 'ExplorerDiscogs/0.1 +https://explorer.radio4000.com';
  }
});

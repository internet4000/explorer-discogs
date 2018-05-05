import Component from '@ember/component';

export default Component.extend({
  tagName: 'span',

  init() {
    this._super(...arguments)
    // Model for building the search filter.
    const types = [
      {label: 'All', value: ''},
      {label: 'Releases', value: 'release'},
      {label: 'Masters', value: 'master'},
      {label: 'Artists', value: 'artist'},
      {label: 'Labels', value: 'label'}
    ]
    this.set('types', types)
  }
});

import Controller from '@ember/controller'
import {readOnly} from '@ember/object/computed'

export default Controller.extend({
  queryParams: ['type', 'query', 'perPage', 'page'],

  // Discogs's default
  type: '',
  query: '',
  perPage: 50,
  page: 1,
  totalPages: readOnly('model.meta.pagination.pages'),

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
})

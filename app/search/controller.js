import Controller from '@ember/controller'
import {readOnly} from '@ember/object/computed'

export default Controller.extend({
  queryParams: ['search', 'perPage', 'page'],
  // discogs's default
  query: '',
  perPage: 50,
  page: 1,
  totalPages: readOnly('model.meta.pagination.pages')
});

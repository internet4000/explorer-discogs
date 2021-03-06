import Component from '@ember/component';
import { computed } from '@ember/object';
import { gt } from '@ember/object/computed';

export default Component.extend({
  path: undefined,
  currentPage: undefined,
  totalPages: undefined,
  nextPage: computed('currentPage', function() {
    return this.get('currentPage') + 1
  }),
  previousPage: computed('currentPage', function() {
    return this.get('currentPage') - 1
  }),
  hasNextPage: computed('currentPage', 'totalPages', function() {
    return this.get('totalPages') - this.get('currentPage') > 0
  }),
  hasPreviousPage: gt('currentPage', 1)
});

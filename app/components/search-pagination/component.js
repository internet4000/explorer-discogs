import Component from '@ember/component';
import { computed } from '@ember/object';
import { gt } from '@ember/object/computed';

export default Component.extend({
  currentPage: undefined,
  totalPages: undefined,
  search: undefined,
  nextPage: computed('currentPage', function() {
    return this.currentPage + 1;
  }),
  previousPage: computed('currentPage', function() {
    return this.currentPage - 1;
  }),
  hasNextPage: computed('currentPage', 'totalPages', function() {
    return this.totalPages - this.currentPage > 0;
  }),
  hasPreviousPage: gt('currentPage', 0)
});

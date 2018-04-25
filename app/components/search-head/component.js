import Component from '@ember/component';
import {inject} from '@ember/service'

export default Component.extend({
  router: inject(),
  search: '',
  actions: {
    submit(search) {
      this.get('router').transitionTo('search', {queryParams: {search}})
    }
  }
});

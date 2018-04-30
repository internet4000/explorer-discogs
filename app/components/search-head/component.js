import Component from '@ember/component';
import {inject} from '@ember/service'

export default Component.extend({
  tagName: 'form',
  router: inject(),
  search: '',
  submit(event) {
    event.preventDefault()
    this.get('router').transitionTo('search', {
      queryParams: {search: this.search}
    })
  }
});

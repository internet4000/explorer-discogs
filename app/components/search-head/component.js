import Component from '@ember/component';
import {inject} from '@ember/service'

export default Component.extend({
  router: inject(),

  tagName: 'form',
  query: '',
  type: '',

  submit(event) {
    event.preventDefault()
    this.router.transitionTo('search', {
      queryParams: {
        query: this.query,
        type: this.type
      }
    })
  }
});

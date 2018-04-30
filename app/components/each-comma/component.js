import Component from '@ember/component';
import {computed} from '@ember/object'

export default Component.extend({
  tagName: 'span',
  count: computed('model.[]', function () {
    return Number(this.get('model.length')) - 1
  })
}).reopenClass({
  positionalParams: ['model']
})

import Component from '@ember/component'
import {computed} from '@ember/object'
import {sort} from '@ember/object/computed'

export default Component.extend({
  property: '',
  order: 'asc',
  sortProperties: computed('model.[]', 'property', 'order', function () {
    return [`${this.property}:${this.order}`]
  }),
  sortedModel: sort('model', 'sortProperties')
}).reopenClass({
  positionalParams: ['model', 'property', 'order']
})

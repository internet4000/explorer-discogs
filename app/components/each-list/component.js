import Component from '@ember/component'

export default Component.extend({
  tagName: 'ul'
}).reopenClass({
  positionalParams: ['model']
})

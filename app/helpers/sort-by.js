import Helper from '@ember/component/helper'
import {get, set, defineProperty, observer} from '@ember/object'
import {isEmpty} from '@ember/utils'
import {sort} from '@ember/object/computed'

export default Helper.extend({
  compute(params) {
    let [array, sortProps] = params

    set(this, 'array', array)
    set(this, 'sortProps', [sortProps])

    return get(this, 'content')
  },

  sortPropsDidChange: observer('sortProps', function() {
    let sortProps = get(this, 'sortProps')

    if (isEmpty(sortProps)) {
      defineProperty(this, 'content', [])
    }

    defineProperty(this, 'content', sort('array', 'sortProps'))
  }),

  contentDidChange: observer('content', function() {
    this.recompute()
  })
})

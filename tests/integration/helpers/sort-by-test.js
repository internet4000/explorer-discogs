import {module, test} from 'qunit'
import {setupRenderingTest} from 'ember-qunit'
import {render} from '@ember/test-helpers'
import hbs from 'htmlbars-inline-precompile'

module('Integration | Helper | sort-by', function(hooks) {
  setupRenderingTest(hooks)

  test('it renders', async function(assert) {
    this.set('array', [{title: 'a'}, {title: 'c'}, {title: 'b'}])

    await render(hbs`
      {{#each (sort-by array "title") as |item|}}{{item.title}}{{/each}}
    `)

    assert.equal(this.element.textContent.trim(), 'abc')
  })
})

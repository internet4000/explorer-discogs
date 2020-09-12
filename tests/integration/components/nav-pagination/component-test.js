import {module, test} from 'qunit'
import {setupRenderingTest} from 'ember-qunit'
import {render} from '@ember/test-helpers'
import hbs from 'htmlbars-inline-precompile'

module('Integration | Component | nav-pagination', function(hooks) {
  setupRenderingTest(hooks)

  test('it renders', async function(assert) {
    await render(hbs`{{nav-pagination currentPage=1 totalPages=3}}`)
    assert.ok(this.element.textContent.includes('Page 1 of 3'))
  })
})

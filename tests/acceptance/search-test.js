import {module, test} from 'qunit'
import {visit, currentURL, fillIn, click} from '@ember/test-helpers'
import {setupApplicationTest} from 'ember-qunit'

module('Acceptance | search', function(hooks) {
  setupApplicationTest(hooks)

  test('searching in the header redirects to /search', async function(assert) {
    await visit('/')
    await fillIn('input[type="search"]', 'ryuichi sakamoto')
    await click('button[type="submit"]')
    assert.equal(currentURL(), '/search?query=ryuichi%20sakamoto')
  })
})

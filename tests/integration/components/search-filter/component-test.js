import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | search-filter', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders with <select> by default', async function(assert) {
    await render(hbs`{{search-filter}}`);
    assert.ok(this.element.querySelector('select'))
  });

  test('it can switch to <button>s', async function(assert) {
    await render(hbs`{{search-filter ui="buttons"}}`);
    assert.equal(this.element.querySelectorAll('button').length, 5)
  });

  test('it can switch to input radio buttons', async function(assert) {
    await render(hbs`{{search-filter ui="radio"}}`);
    assert.equal(this.element.querySelectorAll('input[type="radio"]').length,  5)
  });
});

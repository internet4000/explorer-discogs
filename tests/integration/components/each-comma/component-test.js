import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | each-comma', function(hooks) {
  setupRenderingTest(hooks);

  const trim = (string) => string.replace(/\s/g,'')


  test('it renders', async function(assert) {
    this.set('items', ['a', 'b', 'c'])

    await render(hbs`{{each-comma items}}`);
    assert.equal(trim(this.element.textContent), 'a,b,c')

    // Template block usage:
    await render(hbs`
      {{#each-comma items as |item|}}
        YEA{{item}}
      {{/each-comma}}
    `);

    assert.equal(trim(this.element.textContent), 'YEAa,YEAb,YEAc')
  });
});

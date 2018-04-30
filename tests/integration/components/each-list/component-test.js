import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | each-list', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('items', ['a', 'b', 'c'])

    await render(hbs`{{each-list items}}`);
    assert.equal(this.element.querySelectorAll('li')[1].textContent.trim(), 'b');

    // Template block usage:
    await render(hbs`
      {{#each-list items as |item|}}
        <b>{{item}}</b>
      {{/each-list}}
    `);
    assert.equal(this.element.querySelectorAll('li')[0].innerHTML.trim(), '<b>a</b>');
  });
});

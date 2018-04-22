import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | label', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:label');
    assert.ok(route);
  });
});

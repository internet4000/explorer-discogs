import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | release/labels', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:release/labels');
    assert.ok(route);
  });
});

import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | label/releases', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:label/releases');
    assert.ok(route);
  });
});

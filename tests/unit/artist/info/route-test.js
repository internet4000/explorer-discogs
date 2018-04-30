import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | artist/info', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:artist/info');
    assert.ok(route);
  });
});

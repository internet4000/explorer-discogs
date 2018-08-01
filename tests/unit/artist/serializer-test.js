import {module, test} from 'qunit'
import {setupTest} from 'ember-qunit'
import {run} from '@ember/runloop'

module('Unit | Serializer | artist', function(hooks) {
  setupTest(hooks)

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store')
    let serializer = store.serializerFor('artist')

    assert.ok(serializer)
  })

  test('it serializes records', function(assert) {
    let store = this.owner.lookup('service:store')
    let record = run(() => store.createRecord('artist', {}))

    let serializedRecord = record.serialize()
    console.log(serializedRecord)

    assert.ok(serializedRecord)
  })
})

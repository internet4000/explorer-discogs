import Serializer from '../application/serializer'

export default Serializer.extend({
  // keyForRelationship(key, relationship, method) {
  //   console.log({key, relationship, method})
  //   if (key === 'label') return 'parent_label'
  //   return key
  // },
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    let newPayload = payload

    if (payload.parent_label) {
      // newPayload.parent_label = payload.parent_label.id
      newPayload.label = payload.parent_label.id
    }

    if (payload.sublabels) {
      newPayload.sublabels = payload.sublabels.map(l => l.id).slice(0, 2)
    }

    return this._super(store, primaryModelClass, newPayload, id, requestType)
  }
})

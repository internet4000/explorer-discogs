import Serializer from '../application/serializer'

export default Serializer.extend({
  // keyForRelationship(key, relationship, method) {
  //   console.log({key, relationship, method})
  //   if (key === 'label') {
  //     console.log('label key!!')
  //     return 'parentLabel'
  //   }
  //   return key
  // },
  normalizeFindRecordResponse(store, primaryModelClass, payload, id, requestType) {
    let newPayload = payload

    if (payload.parent_label) {
      newPayload.label = payload.parent_label.id
    }

    if (payload.sublabels) {
      newPayload.sublabels = payload.sublabels.map(l => l.id).slice(0, 2)
    }

    return this._super(store, primaryModelClass, newPayload, id, requestType)
  }
})

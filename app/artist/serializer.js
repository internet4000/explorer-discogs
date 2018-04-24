import Serializer from '../application/serializer'

export default Serializer.extend({
  normalizeFindRecordResponse(store, primaryModelClass, payload, id, requestType) {
    let newPayload = payload

    if (payload.members) {
      newPayload.members = payload.members.map(artist => artist.id)
    }

    if (payload.aliases) {
      newPayload.aliases = payload.aliases.map(artist => artist.id)
    }

    if (payload.groups) {
      newPayload.groups = payload.groups.map(artist => artist.id)
    }

    return this._super(store, primaryModelClass, newPayload, id, requestType)
  }
})

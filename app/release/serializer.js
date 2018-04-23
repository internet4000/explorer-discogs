import Serializer from '../application/serializer'

export default Serializer.extend({
  normalizeFindRecordResponse(store, primaryModelClass, payload, id, requestType) {
    let newPayload = payload

    if (payload.artists) {
      newPayload.artists = payload.artists.map(artist => artist.id)
    }

    return this._super(store, primaryModelClass, newPayload, id, requestType)
  }
})

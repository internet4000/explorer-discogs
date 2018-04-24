import Serializer from '../application/serializer'

export default Serializer.extend({
  attrs: {
    'mainRelease': 'release'
  },
  normalizeFindRecordResponse(store, primaryModelClass, payload, id, requestType) {
    let newPayload = payload

    if (payload.main_release) {
      newPayload.release = payload.main_release
    }

    // if (payload.artists) {
    //   newPayload.artists = payload.artists.map(artist => artist.id)
    // }

    return this._super(store, primaryModelClass, newPayload, id, requestType)
  }
})

import Serializer from '../application/serializer'

const extractUrls = (payload) => {
  return Object.assign(payload, {
    labelReleases: payload.id
  });
};

export default Serializer.extend({
  attrs: {
    // 2. Change back
    'parentLabel': 'label'
  },

  normalizeFindRecordResponse(store, primaryModelClass, payload, id, requestType) {

    let newPayload = payload

    if (payload.parent_label) {
      // 1. Rename to "label" so it understands which model it is.
      newPayload.label = payload.parent_label.id
    }

    if (payload.sublabels) {
      // JSONSerializer expects an array of ids.
      newPayload.sublabels = payload.sublabels.map(l => l.id).slice(0, 2)
    }

    let normalizedPayload = extractUrls(newPayload);
    return this._super(store, primaryModelClass, normalizedPayload, id, requestType)
  }
})

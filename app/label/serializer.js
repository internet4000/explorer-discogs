import Serializer from '../application/serializer'

export default Serializer.extend({
  // normalizeResponse(store, primaryModelClass, payload, id, requestType) {
  //   let newPayload = payload;

  //   if (payload.parent_label) {
  //     console.log(payload)

  //     // option 1
  //     payload.parent_label.type = 'label'

  //     // option 2
  //     newPayload.links = {
  //       'parent_label': `labels/${payload.parent_label.id}`
  //     }
  //     delete newPayload.parent_label

  //     console.log(newPayload)
  //   }

  //   return this._super(...arguments);
  // },
});

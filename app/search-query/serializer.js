import DS from 'ember-data';
import ApplicationSerializer from '../application/serializer';

const serializeSearch = (item, index) => {
  item.resultType = item.type;
  item.type = 'search-query';
  return item;
};

export default ApplicationSerializer.extend({
  // normalizeArrayResponse (store, primaryModelClass, payload, id, requestType) {
  //   payload = {
  //     data: payload.results.map(serializeSearch),
  //     meta: {
  //       pagination: payload.pagination
  //     },
  //     errors: payload.errors || []
  //   };
  //   delete payload.results;
  //   delete payload.pagination;
  //   delete payload.errors;

  //   // return this._super(...arguments);
  //   return payload;
  // }
});

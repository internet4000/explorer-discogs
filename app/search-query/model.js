import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
  // barcode: [],
  // community: [],
  // format: [],
  // genre: [],
  // label: [],
  // style: [],
  catno: attr('string'),
  country: attr('string'),
  coverImage: attr('string'),
  resourceUrl: attr('string'),
  thumb: attr('string'),
  title: attr('string'),
  type: attr('string'),
  uri: attr('string'),
  year: attr('string')
});

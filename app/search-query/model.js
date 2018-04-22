import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
  type: attr('string'),
  thumb: attr('string'),
  uri: attr('string'),
  cover_image: attr('string'),
  resource_url: attr('string'),
  title: attr('string'),
  // style: [],
  // format: [],
  country: attr('string'),
  // barcode: [],
  // community: [],
  // label: [],
  // genre: [],
  catno: attr('string'),
  year: attr('string')
});

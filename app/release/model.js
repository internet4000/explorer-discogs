import DS from 'ember-data';

export default DS.Model.extend({
  country: DS.attr('string'),
  // genres: DS.attr('array'),
  // images: DS.attr('array'),
  released: DS.attr('date'),
  // styles: DS.attr('array'),
  title: DS.attr('string'),
  // tracklist: DS.attr('array'),
  uri: DS.attr('string'),
  // videos: DS.attr('array'),
  year: DS.attr('number'),

  // labels: DS.hasMany('label'),
  // artists: DS.hasMany('artist')
});

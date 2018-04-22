import DS from 'ember-data';

export default DS.Model.extend({
  country: DS.attr('string'),
  genres: DS.attr(),
  images: DS.attr(),
  released: DS.attr('date'),
  styles: DS.attr(),
  title: DS.attr('string'),
  tracklist: DS.attr(),
  uri: DS.attr('string'),
  videos: DS.attr(),
  year: DS.attr('number'),

  // labels: DS.hasMany('label'),
  // artists: DS.hasMany('artist')
});

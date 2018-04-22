import DS from 'ember-data';

export default DS.Model.extend({
  // artists: DS.hasMany('artist')
  // labels: DS.hasMany('label'),
  artistsSort: DS.attr('string'),
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
});

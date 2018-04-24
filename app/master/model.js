import DS from 'ember-data';

export default DS.Model.extend({
  // artists: DS.hasMany('artist'),
  artists: DS.attr(),
  // dataQuality: DS.attr('string'),
  genres: DS.attr(),
  images: DS.attr(),
  lowestPrice: DS.attr('number'),
  mainRelease: DS.belongsTo('release', {async: true}),
  mainReleaseUrl: DS.attr('string'),
  numForSale: DS.attr('number'),
  resourceUrl: DS.attr('string'),
  styles: DS.attr(),
  title: DS.attr('string'),
  tracklist: DS.attr(),
  uri: DS.attr('string'),
  versionsUrl: DS.attr('string'),
  videos: DS.attr(),
  year: DS.attr('number'),
});

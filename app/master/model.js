import DS from 'ember-data';

export default DS.Model.extend({
  styles: DS.attr(),
  genres: DS.attr(),
  mainReleaseUrl: DS.attr('string'),
  numForSale: DS.attr('number'),
  videos: DS.attr(),
  title: DS.attr('string'),
  mainRelease: DS.belongsTo('release'),
  // artists: DS.hasMany('artist'),
  artists: DS.attr(),
  uri: DS.attr('string'),
  versionsUrl: DS.attr('string'),
  lowestPrice: DS.attr('number'),
  year: DS.attr('number'),
  images: DS.attr(),
  resourceUrl: DS.attr('string'),
  dataQuality: DS.attr('string'),
  tracklist: DS.attr()
});

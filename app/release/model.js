import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  // community: DS.attr(),
  // formatQuantity: DS.attr('number'),
  // formats: DS.attr(),
  // series: DS.attr(),
  // status: DS.attr('string'),
  // thumb: DS.attr(),
  artists: DS.attr(),
  artistsSort: DS.attr('string'),
  companies: DS.attr(),
  country: DS.attr('string'),
  extraartists: DS.attr(),
  genres: DS.attr(),
  images: DS.attr(),
  labels: DS.attr(),
  lowestPrice: DS.attr('number'),
  mainReleaseUrl: DS.attr('string'),
  masterUrl: DS.attr('string'),
  notes: DS.attr('string'),
  numForSale: DS.attr('number'),
  released: DS.attr('date'),
  releasedFormatted: DS.attr('string'),
  styles: DS.attr(),
  title: DS.attr('string'),
  tracklist: DS.attr(),
  uri: DS.attr('string'),
  year: DS.attr('number'),

  // Relations
  videos: DS.hasMany('video'),
  mainRelease: DS.belongsTo('release', {async: true}),
  masterId: DS.belongsTo('master'),
  // artists: DS.hasMany('artist', {async: true}),

  discogsHumanUrl: computed('id', function() {
    return `https://discogs.com/release/${this.get('id')}`;
  })
});

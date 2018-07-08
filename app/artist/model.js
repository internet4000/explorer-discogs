import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  dataQuality: DS.attr('string'),
  images: DS.attr(),

  members: DS.hasMany('artist', {inverse: null}),
  groups: DS.hasMany('artist', {inverse: null}),
  aliases: DS.hasMany('artist', {inverse: null}),
  artistReleases: DS.belongsTo('artistReleases', {inverse: null, async: true}),

  name: DS.attr('string'),
  realname: DS.attr('string'),
  namevariations: DS.attr(),
  profile: DS.attr('string'),
  profileHtml: DS.attr('string'),
  profilePlaintext: DS.attr('string'),
  releasesUrl: DS.attr('string'),
  resourceUrl: DS.attr('string'),
  uri: DS.attr('string'),
  urls: DS.attr(),

  // Returns in priority HTML, plaintext or just profile
  profileDynamic: computed('profile', 'profileHtml', 'profilePlaintext', function () {
    const {profile, profileHtml, profilePlaintext} = this
    if (!profileHtml && !profilePlaintext) return profile
    return profileHtml ? profileHtml : profilePlaintext
  }),

  discogsHumanUrl: computed('id', function() {
    return `https://discogs.com/artist/${this.id}`;
  })
});

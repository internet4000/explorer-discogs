import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  contactInfo: DS.attr('string'),
  images: DS.attr(),
  name: DS.attr('string'),
  profile: DS.attr('string'),
  releasesUrl: DS.attr('string'),
  uri: DS.attr('string'),
  urls: DS.attr(),

  labelReleases: DS.belongsTo('labelReleases', {inverse: null, async: true}),
  parentLabel: DS.belongsTo('label', {inverse: null, async: true}),
  sublabels: DS.hasMany('label', {inverse: null, async: true}),

  discogsHumanUrl: computed('id', function() {
    return `https://discogs.com/label/${this.get('id')}`;
  })
});

import DS from 'ember-data';

export default DS.Model.extend({
  contactInfo: DS.attr('string'),
  releasesUrl: DS.attr('string'),
  images: DS.attr(),
  name: DS.attr('string'),
  profile: DS.attr('string'),
  uri: DS.attr('string'),
  urls: DS.attr(),

  sublabels: DS.hasMany('label', {inverse: null, async: true}),
  parentLabel: DS.belongsTo('label', {inverse: null, async: true})
});

import DS from 'ember-data';

export default DS.Model.extend({
  contactInfo: DS.attr('string'),
  // images: DS.attr(),
  name: DS.attr('string'),
  profile: DS.attr('string'),
  uri: DS.attr('string'),
  urls: DS.attr(),

  // sublabels: DS.hasMany('label'),
  // parent_label: DS.belongsTo('label')
});

import DS from 'ember-data';

export default DS.Model.extend({
  contact_info: DS.attr('string'),
  releases_url: DS.attr('string'),
  // images: DS.attr(),
  name: DS.attr('string'),
  profile: DS.attr('string'),
  uri: DS.attr('string'),
  urls: DS.attr(),

  sublabels: DS.hasMany('label', {
    inverse: 'parent_label'
  }),
  parent_label: DS.belongsTo('label', {
    inverse: 'sublabels'
  })
});

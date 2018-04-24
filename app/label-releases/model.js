import DS from 'ember-data';

export default DS.Model.extend({
  releases: DS.hasMany('release', {inverse: null, async: true})
});

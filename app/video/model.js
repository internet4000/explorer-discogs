import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  uri: DS.attr('string'),
  duration: DS.attr('number'),
  embed: DS.attr('boolean'),
  release: DS.belongsTo('release'),
  provider: DS.attr('string'),
  providerId: DS.attr('string')
});

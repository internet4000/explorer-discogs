import Route from '@ember/routing/route'

export default Route.extend({
  afterModel(model) {
    // When a model comes from an artist/label release relationship,
    // it doesn't contain all properties.
    let isMissingProperties = !model.get('uri')
    if (isMissingProperties) return model.reload()
  }
})

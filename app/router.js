import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('releases', function() {
    this.route('release', {path: ':release_id'});
  });
});

export default Router;

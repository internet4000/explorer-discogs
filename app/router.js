import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('label', {path: 'labels/:label_id'}, function() {
    this.route('releases', { path: '/' });
    this.route('info');
  });
  this.route('release', {path: 'releases/:release_id'});
  this.route('artist', {path: 'artists/:artist_id'}, function() {
    this.route('releases', { path: '/'});
    this.route('info');
    this.route('groups');
  });
  this.route('master', {path: 'masters/:master_id'});
  this.route('search');
});

export default Router;

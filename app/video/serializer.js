import DS from 'ember-data';
import youtubeRegex from 'npm:youtube-regex';

const youtubeIdFromUrl = (url) => {
  const results = youtubeRegex().exec(url);
	if (!results) {
		return false;
	}
	return results[1];
};

export default DS.JSONSerializer.extend({
  extractId(modelClass, resourceHash) {
    let ytid = youtubeIdFromUrl(resourceHash.uri);
    return `youtube:${ytid}`;
  },
  extractAttributes(modelClass, resourceHash) {
    let newItem = Object.assign(resourceHash, {
      provider: 'youtube',
      providerId: youtubeIdFromUrl(resourceHash.uri)
    });
    return newItem;
  }
});

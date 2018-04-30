import Component from '@ember/component';
import { readOnly } from '@ember/object/computed';

export default Component.extend({
  tagName: 'a',
  attributeBindings: ['href'],
  href: readOnly('url'),
  url: undefined,
  text: undefined
});

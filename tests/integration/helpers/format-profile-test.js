import {module, test} from 'qunit'
import {setupRenderingTest} from 'ember-qunit'
import {render} from '@ember/test-helpers'
import hbs from 'htmlbars-inline-precompile'

const profileHtml = `Jackson began his career as the youngest member of <a href="https://www.discogs.com/artist/41157-The-Jackson-5" target="_blank">The Jackson 5</a> and started his solo recording career in 1971. Brother of recording artists <a href="https://www.discogs.com/artist/18948-Jackie-Jackson" target="_blank">Jackie Jackson</a>, <a href="https://www.discogs.com/artist/8024-Janet-Jackson" target="_blank">Janet Jackson</a>, <a href="https://www.discogs.com/artist/17971-Jermaine-Jackson" target="_blank">Jermaine Jackson</a>, <a href="https://www.discogs.com/artist/187011-La-Toya-Jackson" target="_blank">La Toya Jackson</a>, <a href="https://www.discogs.com/artist/284531-Marlon-Jackson" target="_blank">Marlon Jackson</a>, <a href="https://www.discogs.com/artist/239453-Randy-Jackson" target="_blank">Randy Jackson</a>, <a href="https://www.discogs.com/artist/115897-Rebbie-Jackson" target="_blank">Rebbie Jackson</a> &amp; <a href="https://www.discogs.com/artist/175556-Tito-Jackson" target="_blank">Tito Jackson</a>, as well as uncle of <a href="https://www.discogs.com/artist/64706-3T" target="_blank">3T</a>.`

const profileHtmlExpected = `Jackson began his career as the youngest member of <a href="/artists/41157" target="_blank">The Jackson 5</a> and started his solo recording career in 1971. Brother of recording artists <a href="/artists/18948" target="_blank">Jackie Jackson</a>, <a href="/artists/8024" target="_blank">Janet Jackson</a>, <a href="/artists/17971" target="_blank">Jermaine Jackson</a>, <a href="/artists/187011" target="_blank">La Toya Jackson</a>, <a href="/artists/284531" target="_blank">Marlon Jackson</a>, <a href="/artists/239453" target="_blank">Randy Jackson</a>, <a href="/artists/115897" target="_blank">Rebbie Jackson</a> &amp; <a href="/artists/175556" target="_blank">Tito Jackson</a>, as well as uncle of <a href="/artists/64706" target="_blank">3T</a>.`

module('Integration | Helper | format-profile', function(hooks) {
  setupRenderingTest(hooks)

  test('it changes discogs links to local links', async function(assert) {
    this.set('inputValue', profileHtml)
    await render(hbs`{{format-profile inputValue}}`)
    assert.equal(this.element.textContent.trim(), profileHtmlExpected)
  })
})

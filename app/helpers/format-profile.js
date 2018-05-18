import {helper} from '@ember/component/helper'

const hrefRegex = /href="(.*?)"/gm
const typeAndIdRegex = /([a-z]+(?:\/))([0-9]+(?:$|(?=[?-])|(?=\/$)))/gm

export function formatProfile([profile]) {
  return profile.replace(hrefRegex, (href) => {
    let [typeAndId] = href.match(typeAndIdRegex)
    const [type, id] = typeAndId.split('/')
    return `href="/${type}s/${id}"`
  })
}

export default helper(formatProfile)

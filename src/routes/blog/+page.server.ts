
import { error } from '@sveltejs/kit'
import contentfulFetch from '../../lib/contentful-fetch'

const query = `query {
  blogPostCollection(skip: 0, limit: 25) {
    total
    items {
      title
      heroImage {
        url
      }
      slug
      description
    }
  }
}
`

export async function load() {
    const response = await contentfulFetch(query)

    if (!response.ok) {
        throw error(404, {
            message: response.statusText,
        })
    }
    const { data } = await response.json()

    return data.blogPostCollection
}
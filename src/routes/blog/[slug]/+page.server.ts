
import { error } from '@sveltejs/kit'
import contentfulFetch from '../../../lib/contentful-fetch'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { marked } from 'marked'

const query = (slug: string) => `query {
  blogPostCollection(where: {slug:"${slug}"}) {
    items {
      title
      description
      body
      content { json }
      heroImage {
        url
      }
      publishDate
    }
  }
}
`

export async function load({ params }: { params: { slug: string } }) {
    const response = await contentfulFetch(query(params.slug))

    if (!response.ok) {
        throw error(404, {
            message: response.statusText,
        })
    }
    const { data } = await response.json()
    const { items } = data.blogPostCollection


    const blogData = items[0]
    if (!blogData) {
        throw error(404, {
            message: 'Not found',
        })
    }

    blogData.body = marked.parse(blogData.body)
    if (blogData.content && blogData.content.json) {
        blogData.content = documentToHtmlString(blogData.content.json)
    }

    return blogData
}
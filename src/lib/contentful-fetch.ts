
const CONTENTFUL_SPACE_ID = "rocw7k669n66"
const CONTENTFUL_ACCESS_TOKEN = "lKtLjDrF2P52AdZBsXlYfwwGQ66NPYlgVZpUuhM94DE"

const contentfulFetch = async (query: any) => {
  const url = 'https://graphql.contentful.com/content/v1/spaces/' + CONTENTFUL_SPACE_ID

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + CONTENTFUL_ACCESS_TOKEN,
    },
    body: JSON.stringify({ query }),
  })

  return response
}

export default contentfulFetch
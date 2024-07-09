import { SERVER_URL } from '@/config/url.config'
import { ApolloClient, from, InMemoryCache } from '@apollo/client'
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs'

const uploadLink = createUploadLink({
	uri: `${SERVER_URL}/graphql`,
	credentials: 'include'
})

export const client = new ApolloClient({
	cache: new InMemoryCache({}),
	headers: {
		'Content-Type': 'application/json'
	},
	link: from([uploadLink])
})

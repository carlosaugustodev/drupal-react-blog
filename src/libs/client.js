import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { URL } from '../constants'
import fetch from 'node-fetch';
import { getBasePath } from './basePath'



let httpLink = null

let client = null
import i18n from '../libs/i18n';

export const setApolloClient = () => {

	const Lng_url = URL.replace("[lng_path]", getBasePath());
	const httpLink = new HttpLink({ uri: Lng_url, fetch: fetch })

	client = new ApolloClient({
	  link: httpLink,
	  cache: new InMemoryCache()
	})
}

export const getApolloClient = () => {
	return client
}

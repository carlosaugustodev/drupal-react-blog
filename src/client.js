import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { URL } from './constants'
import fetch from 'node-fetch';


const httpLink = new HttpLink({ uri: URL, fetch: fetch })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

export default client;

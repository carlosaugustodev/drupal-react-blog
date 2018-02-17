import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { articleQuery } from '../queries/ArticlesQueries.js'
import gql from 'graphql-tag';

const httpLink = new HttpLink({ uri: 'http://decoup2.dd:8083/graphql' })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})


export const homeArticlesReceive = (articles, page = 1) => {
  return {
    type: 'HOME_ARTICLES',
    articles,
    page
  }
}

export const fetchHomeArticle = (dispatch, page) => {
  page = !(page) || page == 0 ? 1 : page
  const limit = page * 2
  client.query({query : gql(`
    query articleQuery {
      nodeQuery (
        filter:{
           conjunction: AND
            conditions: [{
              field: "type"
              value: ["article"]
           }]
        },
        sort: [{field: "changed", direction: DESC}], limit: ${limit}
      ) {
        entities {
          entityId,
          entityLabel,
          ... on NodeArticle {
            body {
              summary
            },
          },
          entityOwner {
            entityLabel
          },
          entityCreated

        }
      }
    }
  `)}).then(result => {
      return dispatch(homeArticlesReceive(result.data.nodeQuery.entities, limit))
    })
}

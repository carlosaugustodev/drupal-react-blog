import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import gql from 'graphql-tag';
import articlesHomeGql from '../queries/home-articles.js'
import { HOME_ARTICLES_ACTION } from '../constants.js'

const httpLink = new HttpLink({ uri: 'http://decoup2.dd:8083/graphql' })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

export const homeArticlesReceive = (articles, page = 1, showLoadMore) => {
  return {
    type: HOME_ARTICLES_ACTION,
    articles,
    page,
    showLoadMore
  }
}

export const fetchHomeArticle = (dispatch, page) => {
  page = !(page) || page == 0 ? 1 : page
  const limit = page * 2
  client.query({query : gql(articlesHomeGql(limit))}).then(result => {

    const showLoadMore = limit < result.data.nodeQuery.count ? true : false;
    return dispatch(homeArticlesReceive(result.data.nodeQuery.entities, limit, showLoadMore))
  })
}

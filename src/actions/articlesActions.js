import { getApolloClient } from '../libs/client.js'
import gql from 'graphql-tag';
import singleGql from '../queries/single-article.gql'
import articlesHomeGql from '../queries/home-articles.gql'
import * as CONST from '../constants.js'
import { getLangCode } from '../libs/language'


export const homeArticlesReceive = (articles, page = 1, showLoadMore) => {
  return {
    type: CONST.HOME_ARTICLES_ACTION,
    articles,
    page,
    showLoadMore
  }
}

export const singleArticleReceive = (article) => {
  return {
    type: CONST.SINGLE_ARTICLES_ACTION,
    article,
  }
}

export const fetchSingleArticle = (dispatch, id) => {
  return (async () => {
    const result = await getApolloClient().query({query : gql(singleGql(id))});
    return dispatch(singleArticleReceive(result.data.nodeById))
  })()
}

export const fetchHomeArticle = (dispatch, page) => {
  page = !(page) || page === 0 ? 1 : page
  const limit = page * 2

  return (async () => {
      
    const result = await getApolloClient().query({query : gql(articlesHomeGql(getLangCode(), limit))});
    const showLoadMore = limit < result.data.nodeQuery.count ? true : false;

    return dispatch(homeArticlesReceive(result.data.nodeQuery.entities, limit, showLoadMore))
  })()
}

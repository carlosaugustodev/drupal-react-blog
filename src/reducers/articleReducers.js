import * as CONST from '../constants.js'

const ArticleReducers = (state = [], action) => {

  switch (action.type) {

    case CONST.HOME_ARTICLES_ACTION:
      return {
        ...state,
        articles: action.articles,
        page: action.page,
        showLoadMore: action.showLoadMore
      }

    case CONST.SINGLE_ARTICLES_ACTION:
      return {
        ...state,
        article: action.article
      }

    default:
      return state
  }
}

export default ArticleReducers;

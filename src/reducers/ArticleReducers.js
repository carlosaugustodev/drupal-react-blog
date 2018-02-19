import { HOME_ARTICLES_ACTION } from '../constants.js'

const ArticleReducers = (state = [], action) => {

  switch (action.type) {

    case HOME_ARTICLES_ACTION:
      return {
        articles: action.articles,
        page: action.page,
        showLoadMore: action.showLoadMore
      }

    default:
      return state
  }
}

export default ArticleReducers;

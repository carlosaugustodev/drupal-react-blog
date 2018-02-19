import { HOME_ARTICLES_ACTION, SINGLE_ARTICLES_ACTION } from '../constants.js'

const ArticleReducers = (state = [], action) => {

  switch (action.type) {

    case HOME_ARTICLES_ACTION:
      return {
        ...state,
        articles: action.articles,
        page: action.page,
        showLoadMore: action.showLoadMore
      }

      case 'TEST_STATE_ARTICLE':
        return {
          ...state,
          articles: action.articles,
        }

    case SINGLE_ARTICLES_ACTION:
      return {
        ...state,
        article: action.article
      }

    default:
      return state
  }
}

export default ArticleReducers;

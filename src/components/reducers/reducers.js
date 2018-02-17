import { combineReducers } from 'redux'

const articlesReducers = (state = [], action) => {

  switch (action.type) {

    case 'HOME_ARTICLES':
      return {
        articles: action.articles,
        page: action.page
      }

      // {
      //   articles: action.articles,
      //   page: action.page
      // }
    default:
      return state
  }
}

const reducer = combineReducers({
  articlesReducers
})

export default reducer

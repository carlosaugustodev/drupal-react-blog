import { combineReducers } from 'redux'
import ArticleReducers from './articleReducers'
import FooterReducers from './footerReducers'
import MenuReducers from './menuReducers'
import PageReducers from './pageReducers'

const reducer = combineReducers({
  FooterReducers,
  ArticleReducers,
  MenuReducers,
  PageReducers
})

export default reducer

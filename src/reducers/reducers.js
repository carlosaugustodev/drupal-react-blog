import { combineReducers } from 'redux'
import ArticleReducers from './ArticleReducers'
import FooterReducers from './FooterReducers'
import MenuReducers from './MenuReducers'
import PageReducers from './PageReducers'

const reducer = combineReducers({
  FooterReducers,
  ArticleReducers,
  MenuReducers,
  PageReducers
})

export default reducer

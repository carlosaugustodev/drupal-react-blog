import { combineReducers } from 'redux'
import ArticleReducers from './articleReducers'
import FooterReducers from './footerReducers'
import MenuReducers from './menuReducers'
import PageReducers from './pageReducers'
import BannerReducers from './bannerReducers'

const reducer = combineReducers({
  FooterReducers,
  ArticleReducers,
  MenuReducers,
  PageReducers,
  BannerReducers
})

export default reducer

import { combineReducers } from 'redux'
import ArticleReducers from './articleReducers'
import FooterReducers from './footerReducers'
import MenuReducers from './menuReducers'
import PageReducers from './pageReducers'
import BannerReducers from './bannerReducers'
import { localeReducer as locale } from 'react-localize-redux';

const reducer = combineReducers({
  FooterReducers,
  ArticleReducers,
  MenuReducers,
  PageReducers,
  BannerReducers,
  locale
})

export default reducer

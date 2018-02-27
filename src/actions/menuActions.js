import menuLandingPages from '../queries/menu-landing-pages.gql'
import { getApolloClient } from '../libs/client.js'
import gql from 'graphql-tag';
import * as CONST from '../constants.js'
import { getLanguage } from '../libs/language'
import { fetchRequest } from './commonActions'

const main_menu = {
	"en" : "landing-pages",
	"pt" : "landing-pages-pt"
}

export const menuLandingPagesReceive = (landingPages) => {
  return {
    type: CONST.MENU_LANDING_PAGES_ACTION,
    landingPages,
  }
}

export const fetchLandingPages = (dispatch) => {
  dispatch(fetchRequest(true))
  getApolloClient().query({query : gql(menuLandingPages(main_menu[getLanguage()])) }).then(result => {
    dispatch(fetchRequest(false))
    return dispatch(menuLandingPagesReceive(result.data.menuByName.links))
  })
}

import menuLandingPages from '../queries/menu-landing-pages'
import client from '../client.js'
import gql from 'graphql-tag';
import * as CONST from '../constants.js'

export const menuLandingPagesReceive = (landingPages) => {
  return {
    type: CONST.MENU_LANDING_PAGES_ACTION,
    landingPages,
  }
}

export const fetchLandingPages = (dispatch) => {
  client.query({query : gql(menuLandingPages) }).then(result => {
    return dispatch(menuLandingPagesReceive(result.data.menuByName.links))
  })
}

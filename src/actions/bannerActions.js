import client from '../client.js'
import gql from 'graphql-tag';
import bannerGql from '../queries/banner.js'
import * as CONST from '../constants.js'

export const bannerReceive = (banner) => {
  return {
    type: CONST.BANNER_ACTION,
    banner,
  }
}

export const fetchBanner = (dispatch) => {
  client.query({query : gql(bannerGql())}).then(result => {
    return dispatch(bannerReceive(result.data.nodeQuery.entities))
  })
}


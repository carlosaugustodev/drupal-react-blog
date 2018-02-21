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
  return (async () => {
    const result = await client.query({query : gql(bannerGql())})
    return dispatch(bannerReceive(result.data.nodeQuery.entities))
  })()
}


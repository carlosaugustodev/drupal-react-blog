import { getApolloClient } from '../libs/client.js'
import gql from 'graphql-tag';
import bannerGql from '../queries/banner.gql'
import * as CONST from '../constants.js'
import { getLangCode } from '../libs/language'

export const bannerReceive = (banner) => {
  return {
    type: CONST.BANNER_ACTION,
    banner,
  }
}

export const fetchBanner = (dispatch) => {
  return (async () => {
    const result = await getApolloClient().query({query : gql(bannerGql(getLangCode()))})
    return dispatch(bannerReceive(result.data.nodeQuery.entities))
  })()
}


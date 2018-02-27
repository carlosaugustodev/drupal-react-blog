import { getApolloClient } from '../libs/client.js'
import gql from 'graphql-tag';
import landingPageBypathGql from '../queries/page-by-path.gql'
import * as CONST from '../constants.js'

export const pageByPathReceive = (page) => {
  return {
    type: CONST.PAGE_BY_PATH_ACTION,
    page,
  }
}

export const fetchPageByPath = (dispatch, path) => {

  return (async () => {
    const result = await getApolloClient().query({query : gql(landingPageBypathGql(path))});
    return dispatch(pageByPathReceive(result.data.route.nodeContext))
  })()
}

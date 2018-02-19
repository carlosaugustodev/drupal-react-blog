import client from '../client.js'
import gql from 'graphql-tag';
import landingPageBypathGql from '../queries/page-by-path.js'
import * as CONST from '../constants.js'

export const pageByPathReceive = (page) => {
  return {
    type: CONST.PAGE_BY_PATH_ACTION,
    page,
  }
}

export const fetchPageByPath = (dispatch, path) => {
  client.query({query : gql(landingPageBypathGql(path))}).then(result => {
    return dispatch(pageByPathReceive(result.data.route.nodeContext))
  })
}

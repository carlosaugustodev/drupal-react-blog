import { getApolloClient } from '../libs/client.js'
import gql from 'graphql-tag';
import footerGql from '../queries/footer.gql'
import * as CONST from '../constants.js'

export const footerReceive = (footer) => {
  return {
    type: CONST.FOOTER_ACTION,
    footer,
  }
}

export const fetchFooter = (dispatch) => {
  getApolloClient().query({query : gql(footerGql())}).then(result => {
    return dispatch(footerReceive(result.data.blockContentById))
  })
}

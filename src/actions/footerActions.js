import client from '../client.js'
import gql from 'graphql-tag';
import footerGql from '../queries/footer.js'
import * as CONST from '../constants.js'

export const footerReceive = (footer) => {
  return {
    type: CONST.FOOTER_ACTION,
    footer,
  }
}

export const fetchFooter = (dispatch) => {
  client.query({query : gql(footerGql())}).then(result => {
    return dispatch(footerReceive(result.data.blockContentById))
  })
}

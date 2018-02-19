import client from '../client.js'
import gql from 'graphql-tag';
import footerGql from '../queries/footer-query.js'
import { HOME_ARTICLES_ACTION, SINGLE_ARTICLES_ACTION } from '../constants.js'

export const footerReceive = (footer) => {
  return {
    type: 'FOOTER_ACTION',
    footer,
  }
}



export const fetchFooter = (dispatch) => {

  client.query({query : gql(footerGql())}).then(result => {
    return dispatch(footerReceive(result.data.blockContentById))
  })
}

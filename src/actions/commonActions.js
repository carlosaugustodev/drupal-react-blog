import { fetchFooter } from "../actions/footerActions"
import { fetchLandingPages } from "../actions/menuActions"
import * as CONST from '../constants.js'

export const mainFetch = async (dispatch) => {
    await fetchFooter(dispatch);
    await fetchLandingPages(dispatch);
}


export const fetchRequest = (loading) => {
  return {
    type: CONST.LOADING_ACTION,
    loading,
  }
}
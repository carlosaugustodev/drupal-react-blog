import { fetchFooter } from "../actions/footerActions"
import { fetchLandingPages } from "../actions/menuActions"

export const mainFetch = async (dispatch) => {
    await fetchFooter(dispatch);
    await fetchLandingPages(dispatch);
}


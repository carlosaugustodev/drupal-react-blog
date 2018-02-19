import * as CONST from '../constants.js'

const FooterReducers = (state = [], action) => {
  switch (action.type) {
    case CONST.FOOTER_ACTION:
      return {
        ...state,
        footer: action.footer,
      }
    default:
      return state
  }
}

export default FooterReducers;

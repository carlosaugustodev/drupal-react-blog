import * as CONST from '../constants.js'

const MenuReducers= (state = [], action) => {
  
  switch (action.type) {

    case CONST.MENU_LANDING_PAGES_ACTION:
      return {
        ...state,
        landingPages: action.landingPages,
      }

    default:
      return state
  }
}

export default MenuReducers;

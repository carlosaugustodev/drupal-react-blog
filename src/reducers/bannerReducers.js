import * as CONST from '../constants.js'

const BannerReducers = (state = [], action) => {

  switch (action.type) {

    case CONST.BANNER_ACTION:
      return {
        ...state,
        banner: action.banner
      }

    default:
      return state
  }
}

export default BannerReducers;

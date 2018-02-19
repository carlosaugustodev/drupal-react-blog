import * as CONST from '../constants.js'

const PageReducers = (state = [], action) => {

  switch (action.type) {

    case CONST.PAGE_BY_PATH_ACTION:
      return {
        ...state,
        page: action.page,
      }

    default:
      return state
  }
}

export default PageReducers;

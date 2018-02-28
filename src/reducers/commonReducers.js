import * as CONST from '../constants.js'

const CommonReducers = (state = [], action) => {

  switch (action.type) {

    case CONST.LOADING_ACTION:
      return {
        ...state,
        loading: action.loading,
      }

    default:
      return state
  }
}

export default CommonReducers;

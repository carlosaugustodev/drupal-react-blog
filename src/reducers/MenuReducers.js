const MenuReducers= (state = [], action) => {
  
  switch (action.type) {

    case 'MENU_LANDING_PAGES_ACTION':
      return {
        ...state,
        landingPages: action.landingPages,
      }


    default:
      return state
  }
}

export default MenuReducers;

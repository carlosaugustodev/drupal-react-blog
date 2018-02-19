const FooterReducers = (state = [], action) => {
  switch (action.type) {
    case 'FOOTER_ACTION':
      return {
        ...state,
        footer: action.footer,
      }
    default:
      return state
  }
}

export default FooterReducers;

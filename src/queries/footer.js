export default () => {
  return `
  query {
    blockContentById(id: "1"){
      entityLabel
      ... on  BlockContentFooter{
        fieldCopyright {
          value
        },
        fieldFacebookLink
      }
    }
  }
  `
}

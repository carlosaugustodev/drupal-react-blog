export default (id) => {
  return `
  query articleSingleQuery {
    nodeById(id: ${id}){
      entityLabel,
      ... on NodeArticle {
        body {
          summary,
          value
        },
        fieldImage {
          url
        }
      },
      entityOwner {
        entityLabel
      },
      entityCreated

    }
  }
  `
}

export default (id) => {
  return `
  query articleSingleQuery {
    route(path: "${id}") {
      nodeContext {
        entityLabel,
        ... on NodePage {
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
  }
  `
}

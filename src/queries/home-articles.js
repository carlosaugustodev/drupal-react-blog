export default (limit) => {
  return `
    query articleQuery {
      nodeQuery (
        filter:{
           conjunction: AND
            conditions: [{
              field: "type"
              value: ["article"]
           }]
        },
        sort: [{field: "changed", direction: DESC}], limit: ${limit}
      ) {
        count,
        entities {
          entityId,
          entityLabel,
          ... on NodeArticle {
            body {
              summary
            },
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

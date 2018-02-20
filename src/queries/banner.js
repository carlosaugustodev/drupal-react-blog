export default () => {
  return `
  query bannerQuery{
    nodeQuery (
      filter:{
             conjunction: AND
              conditions: [{
                field: "type"
                value: ["banner_home"]
             }]
          },
          sort: [{field: "changed", direction: DESC}], limit: 5
    ){
      count,
      entities {
        entityLabel,
        ... on NodeBannerHome {
          fieldSubtitle {
            value
          },
          fieldImage {
            alt,
            url
          },
          fieldCallToAction {
            uri,
            title
          }
        }
      }
    }
  }
  `
}
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const articleQuery = gql`
  query articleQuery($limit: Int!) {
    nodeQuery (
      limit: $limit,
      filter:{
         conjunction: AND
          conditions: [{
            field: "type"
            value: ["article"]
         }]
      },
      sort: [{field: "changed", direction: DESC}], limit:5) {
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
`;
// const articlesHomeList = function(component) {
//   return graphql(articleQuery,{
//     options: (props) => (
//       console.log(props),
//       {
//       variables: {
//         limit: 20
//       }
//     })
//   })(component)
// };
const articlesHomeList = graphql(articleQuery,{
  options: (props) => (
    console.log(props),
    {
    variables: {
      limit: 20
    }
  })
});


/**
*/
const articleSingleQuery = gql`
  query articleSingleQuery($id: String!) {
    nodeById(id: $id){
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
`;
const SingleArticle = graphql(articleSingleQuery, {
  options: (match) => (
    {
    variables: {
      id: match.params.postId
    }
  })
});

const landingPageByPathQuery = gql`
  query articleSingleQuery($id: String!) {
    route(path: $id) {
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
`;
const landingPageByPath = graphql(landingPageByPathQuery, {
  options: (match) => (
    {
    variables: {
      id: "/pages/" + match.params.alias
    }
  })
});

export {
  articleQuery,
  articlesHomeList,
  SingleArticle,
  landingPageByPath
}

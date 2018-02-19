import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

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
  SingleArticle,
  landingPageByPath
}

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const articleQuery = gql`
  query articleQuery {
    nodeQuery(sort: [{field: "changed", direction: DESC}], limit:100) {
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

// const ArticlesContainer = graphql(articleQuery);
// export ArticlesContainer(ArticleList;
export.articlesHomeList = (comp) => {
  return graphql(articleQuery)(comp);
}

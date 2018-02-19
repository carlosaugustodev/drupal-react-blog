import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const menuLandingQuery = gql`
  query menuQuery {
    menuByName(name : "landing-pages") {
      links {
        label,
        url {
          alias,
          path
        }
      }
    }
  }
`;
const menuLanding = graphql(menuLandingQuery);

export {
  menuLanding
}

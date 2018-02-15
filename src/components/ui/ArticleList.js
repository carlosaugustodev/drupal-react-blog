import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import React from 'react';
import AticleItem from './AticleItem'


const articleQuery = gql`
  query articleQuery {
    nodeQuery {
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

const ArticleList = ({ data }) => {
  console.log(data)
  if (data.loading) {
    return (<div>Loading</div>)
  }


  return (
    <div class="container">


      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          {
            data.nodeQuery.entities.map((article, k) => {
                return (
                  <AticleItem article={article}></AticleItem>
                )
            })
          }

          <div class="clearfix">
            <a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
          </div>
        </div>
      </div>
    </div>
  )
}




const ArticlesContainer = graphql(articleQuery);
export default ArticlesContainer(ArticleList)

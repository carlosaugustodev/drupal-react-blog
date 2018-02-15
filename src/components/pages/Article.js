import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

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

const Article = ( data ) => {

  if (data.data.loading) {
    return (<div>Loading</div>)
  }

  const article = data.data.nodeById;

  console.log(article)
  return (

    <div>

      <header class="masthead">
        <div class="overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
              <div class="post-heading">
                <h1>{article.entityLabel}</h1>
                <h2 class="subheading">{article.body.summary.substring(1, 100)}</h2>
                <span class="meta">Posted by
                  <a href="#"> {article.entityOwner.entityLabel} </a>
                  on {article.entityCreated}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <article>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">

              <img src={article.fieldImage.url}></img>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
              {article.body.value}
            </div>
          </div>
        </div>
      </article>
    </div>

  )
}

const ArticleContainer = graphql(articleSingleQuery, {
  options: (match) => (
    {
    variables: {
      id: match.params.postId
    }
  })
});
export default ArticleContainer(Article);

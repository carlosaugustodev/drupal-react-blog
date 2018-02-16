import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Masthead from '../ui/Masthead'
import ArticleBody from '../ui/ArticleBody'
import { landingPageByPath } from '../queries/ArticlesQueries.js'



const LandingPages = ( {data} ) => {
  console.log(data);
  if (data.loading) {
    return (<div>Loading</div>)
  }

  const article = data.route.nodeContext;

  return (

    <div>

      <Masthead
        title={article.entityLabel}
        subtitle={(article.body) ? article.body.summary : ''}
        author={article.entityOwner.entityLabel}
        created={article.entityCreated}
        imageUrl={article.fieldImage.url} />
      <ArticleBody article={article}/>

    </div>

  )
}

export default landingPageByPath(LandingPages);

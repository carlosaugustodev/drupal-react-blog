import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Masthead from '../ui/Masthead'
import ArticleBody from '../ui/ArticleBody'
import Loading from '../ui/Loading'
import { SingleArticle } from '../queries/ArticlesQueries.js'



const Article = ( data ) => {

  if (data.data.loading) {
    return (<div>Loading</div>)
  }

  const article = data.data.nodeById;

  return (

    <div>

      <Masthead
        title={article.entityLabel}
        subtitle={(article.body) && (article.body.summary) ? article.body.summary : ''}
        author={article.entityOwner.entityLabel}
        created={article.entityCreated}
        imageUrl={(article.fieldImage) ? article.fieldImage.url : ''} />
      <ArticleBody article={article}/>

    </div>

  )
}

export default SingleArticle(Article);

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import React from 'react';
import AticleItem from './AticleItem'

const ArticleList = ({ articles,loadMoreFunction, showLoadMore}) => {

  return (
    <div className="container">

      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          {

            articles.map((article, k) => {
                return (
                  <AticleItem article={article} key={k}></AticleItem>
                )
            })
          }

          <div className="clearfix">
            { showLoadMore ? <a className="btn btn-primary float-right" onClick={() => loadMoreFunction()}>Older Posts &rarr;</a> : '' }

          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleList

import React from 'react';
import ArticleItem from './ArticleItem'
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';

const ArticleList = ({ articles,loadMoreFunction, showLoadMore, t}) => {

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          {
            articles.map((article, k) => {
              return (
                <ArticleItem article={article.entityTranslation} key={k}></ArticleItem>
              )
            })
          }
          <div className="clearfix">
            { showLoadMore ? <a className="btn btn-primary float-right" onClick={() => loadMoreFunction()}>{t('Older Posts')} &rarr;</a> : '' }
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return ({
    t: getTranslate(state.locale),
  })
};

export default connect(mapStateToProps)(ArticleList);

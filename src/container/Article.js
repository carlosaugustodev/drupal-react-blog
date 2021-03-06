import React from 'react';
import Masthead from '../components/Masthead'
import ArticleBody from '../components/ArticleBody'
import Loading from '../components/Loading'
import Head from '../components/Head'
import { fetchSingleArticle } from '../actions/articlesActions'
import { connect } from 'react-redux';

class Article extends React.Component {

  static async getInitialProps(store, isServer, pathname, query){

    await fetchSingleArticle(store.dispatch, query.id)
  }

  render() {
    const article = this.props.article

    if (!article) {
      return <Loading/>
    }

    return (
      <div>
        <Head title={article.entityLabel}/>
        <Masthead {...this.props.articleMasthead} />
        <ArticleBody article={article}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  const article = (state.ArticleReducers.article) ? state.ArticleReducers.article : {};

  return ({
    article : state.ArticleReducers.article,
    articleMasthead : {
      title : article.entityLabel,
      subtitle : (article.body) && (article.body.summary) ? article.body.summary : '',
      author : (article.entityOwner) ? article.entityOwner.entityLabel : '',
      created : article.entityCreated,
      imageUrl : (article.fieldImage) ? article.fieldImage.url : ''
    }
  })
};

export default connect(mapStateToProps)(Article);

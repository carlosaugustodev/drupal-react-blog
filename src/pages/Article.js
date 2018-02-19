import React from 'react';
import Masthead from '../ui/Masthead'
import ArticleBody from '../ui/ArticleBody'
import { fetchSingleArticle } from '../actions/articlesActions'
import { connect } from 'react-redux';

class Article extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props
    const id = this.props.params.postId
    fetchSingleArticle(dispatch, id)
  }

  render() {
    const article = this.props.article

    if (!article) {
      return (<div>Loading</div>)
    }

    return (
      <div>
        <Masthead {...this.props.articleMastahed} />
        <ArticleBody article={article}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  const article = (state.ArticleReducers.article) ? state.ArticleReducers.article : {};

  return ({
    article : state.ArticleReducers.article,
    articleMastahed : {
      title : article.entityLabel,
      subtitle : (article.body) && (article.body.summary) ? article.body.summary : '',
      author : (article.entityOwner) ? article.entityOwner.entityLabel : '',
      created : article.entityCreated,
      imageUrl : (article.fieldImage) ? article.fieldImage.url : ''
    }
  })
};

export default connect(mapStateToProps)(Article);

import React from 'react';
import { connect } from 'react-redux';
import { fetchPageByPath } from '../actions/pageActions';

import ArticleBody from '../components/ArticleBody'
import Masthead from '../components/Masthead'


class LandingPage extends React.Component {

  static async getInitialProps(store, isServer, pathname, query){
    
    await fetchPageByPath(store.dispatch, "/pages/" + query.id)
  }

  render() {
    if (!this.props.page) {
      return 'opa'
    }

    return (
      <div>
        <Masthead {...this.props.articleMastahed} />
        <ArticleBody article={this.props.page}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  const article = (state.PageReducers.page) ? state.PageReducers.page : {};
  return ({
    page : article,
    articleMastahed : {
      title : article.entityLabel,
      subtitle : (article.body) && (article.body.summary) ? article.body.summary : '',
      author : (article.entityOwner) ? article.entityOwner.entityLabel : '',
      created : article.entityCreated,
      imageUrl : (article.fieldImage) ? article.fieldImage.url : ''
    }
  })
};

export default connect(mapStateToProps)(LandingPage);

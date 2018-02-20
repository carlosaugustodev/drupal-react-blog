import React from 'react';
import { connect } from 'react-redux';
import { fetchHomeArticle } from '../actions/articlesActions'

import Masthead from '../components/Masthead'
import ArticleList from '../components/ArticleList'
import Loading from '../components/Loading'

class Home extends React.Component {

  static async getInitialProps(store, isServer, pathname, query){
    
    await fetchHomeArticle(store.dispatch)
  }

  loadMoreHandle = () => {
    const { dispatch, page } = this.props
    fetchHomeArticle(dispatch, page)
  }

  render(){

    if (!(this.props.articles) || this.props.articles.length === 0) {
      return <Loading/>
    }

    const data = this.props.articles;

    return (
      <div>
        <Masthead title={'Home'} subtitle="Subtitle Home" imageUrl="/img/home-bg.jpg"/>

        { !data.loading ?
            <ArticleList articles={data} loadMoreFunction={this.loadMoreHandle} showLoadMore={this.props.showLoadMore} ></ArticleList>
            : <Loading/>
        }

      </div>
    )
  }
}

const mapStateToProps = (state) => {

  return ({
    articles : state.ArticleReducers.articles,
    page: state.ArticleReducers.page,
    showLoadMore: state.ArticleReducers.showLoadMore
  })
};

export default connect(mapStateToProps)(Home);

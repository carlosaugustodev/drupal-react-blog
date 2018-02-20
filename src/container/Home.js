import React from 'react';
import { connect } from 'react-redux';
import { fetchHomeArticle } from '../actions/articlesActions'
import { fetchBanner } from '../actions/bannerActions'

import ArticleList from '../components/ArticleList'
import Banner from '../components/Banner'
import Loading from '../components/Loading'

class Home extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props
    fetchHomeArticle(dispatch)
    fetchBanner(dispatch)
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
        <Banner {...this.props.banner}/>

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
    banner : state.BannerReducers.banner,
    articles : state.ArticleReducers.articles,
    page: state.ArticleReducers.page,
    showLoadMore: state.ArticleReducers.showLoadMore
  })
};

export default connect(mapStateToProps)(Home);

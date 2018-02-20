import React from 'react';
import Masthead from '../ui/Masthead'
import ArticleList from '../ui/ArticleList'
import Loading from '../ui/Loading'
import { connect } from 'react-redux';
import { fetchHomeArticle } from '../actions/articlesActions'

class Home extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props
    fetchHomeArticle(dispatch)
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

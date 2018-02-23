import React from 'react';
import { connect } from 'react-redux';
import { fetchHomeArticle } from '../actions/articlesActions'
import { fetchBanner } from '../actions/bannerActions'

import ArticleList from '../components/ArticleList'
import Banner from '../components/Banner'
import Loading from '../components/Loading'
import Carousel from '../components/Carousel'
import Head from '../components/Head'
import bannerStyles from '../styles/components/banner.css'
import withStyle from '../lib/WithStyle'

class Home extends React.Component {

  static async getInitialProps(store, isServer, pathname, query){

    await fetchHomeArticle(store.dispatch)
    await fetchBanner(store.dispatch)
  }

  loadMoreHandle = () => {
    const { dispatch, page } = this.props
    fetchHomeArticle(dispatch, page)
  }

  render(){
    
    if (!(this.props.articles) || this.props.articles.length === 0) {
      return <Loading/>
    }

    const data = this.props.articles
    
    return (

      <div>
        { withStyle(bannerStyles) }
        <Head title={"Home react project"}/>
        <Carousel>
            {
                this.props.banners.map((banner, k) =>
                    <div key={k}><Banner banner={banner} /></div>
                )
            }
        </Carousel>

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
    banners : state.BannerReducers.banner,
    articles : state.ArticleReducers.articles,
    page: state.ArticleReducers.page,
    showLoadMore: state.ArticleReducers.showLoadMore
  })
};

export default connect(mapStateToProps)(Home);

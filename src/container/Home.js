import React from 'react';
import { connect } from 'react-redux';
import { fetchHomeArticle } from '../actions/articlesActions'
import { fetchBanner } from '../actions/bannerActions'
import { getTranslate, getActiveLanguage } from 'react-localize-redux';

import ArticleList from '../components/ArticleList'
import Banner from '../components/Banner'
import Loading from '../components/Loading'
import Carousel from '../components/Carousel'
import Head from '../components/Head'


class Home extends React.Component {

  static async getInitialProps(store){
    await fetchHomeArticle(store.dispatch)
    await fetchBanner(store.dispatch)
  }

  loadMoreHandle = () => {
    const { dispatch, page } = this.props
    fetchHomeArticle(dispatch, page)
  }

  render(){

    return (
      <div>
        <Head title={"Home react project"}/>
        <Carousel>
            {
              this.props.banners ? this.props.banners.map((banner, k) =>
                    <div key={k}><Banner banner={banner.entityTranslation} /></div>
                ) : ''
            }
        </Carousel>

        <ArticleList articles={this.props.articles} loadMoreFunction={this.loadMoreHandle} showLoadMore={this.props.showLoadMore} ></ArticleList>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    t: getTranslate(state.locale),
    banners : state.BannerReducers.banner,
    articles : state.ArticleReducers.articles,
    page: state.ArticleReducers.page,
    showLoadMore: state.ArticleReducers.showLoadMore
  })
};

export default connect(mapStateToProps)(Home);

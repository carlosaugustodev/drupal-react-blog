import React from 'react';
import { connect } from 'react-redux';
import { fetchHomeArticle } from '../actions/articlesActions'
import { fetchBanner } from '../actions/bannerActions'

import ArticleList from '../components/ArticleList'
import Banner from '../components/Banner'
import Loading from '../components/Loading'
import Carousel from '../components/Carousel'
import Head from '../components/Head'
import { translate } from 'react-i18next';

import i18n from '../i18n';

class Home extends React.Component {


  static async getInitialProps(store, isServer, pathname, query){

    await fetchHomeArticle(store.dispatch)
    await fetchBanner(store.dispatch)
  }

  componentDidMount() {
    console.log(this.props)
    // const { dispatch, page } = this.props
    // fetchHomeArticle(dispatch)
    // fetchBanner(dispatch)


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
        {this.props.t("common.hello")}
        <Head title={"Opa"}/>
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

const opa = connect(mapStateToProps)(Home)


const Extended = translate(['common'], { i18n, wait: process.browser })(opa);

// Passing down initial translations
// use req.i18n instance on serverside to avoid overlapping requests set the language wrong
Extended.getInitialProps = async (props) => {

  await fetchHomeArticle(props.dispatch)
  await fetchBanner(props.dispatch)

  if (props.req && !process.browser) return i18n.getInitialProps(props.req, [ 'common']);
  return props;
};

export default Extended;

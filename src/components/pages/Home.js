import React from 'react';
import Masthead from '../ui/Masthead'
import ArticleList from '../ui/ArticleList'
import { articlesHomeList } from '../queries/ArticlesQueries.js'
import { connect } from 'react-redux';
import { fetchHomeArticle } from '../actions/actions'


const getHomeArticles = () => {
}

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

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
      return (<div>Loading</div>)
    }

    const data = this.props.articles;

    return (
      <div>
        <Masthead title={'Home'} subtitle="Subtitle Home" imageUrl="/img/home-bg.jpg"/>

        { !data.loading ?
            <ArticleList articles={data} loadMoreFunction={this.loadMoreHandle} ></ArticleList>
            : <div>Loading</div>
        }

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return ({
    articles : state.articlesReducers.articles,
    page: state.articlesReducers.page
  })
};


export default connect(mapStateToProps)(Home);
// export default articlesHomeList(Home);

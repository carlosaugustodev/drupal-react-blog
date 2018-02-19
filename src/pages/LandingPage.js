import React from 'react';
import Masthead from '../ui/Masthead'
import Loading from '../ui/Loading'
import ArticleBody from '../ui/ArticleBody'
import { connect } from 'react-redux';
import { fetchPageByPath } from '../actions/PageActions';


class LandingPage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props
    fetchPageByPath(dispatch, "/pages/" + this.props.params.alias)
  }

  render() {
    if (!this.props.page) {
      return < Loading/>
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

import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router'
import "./scss/menu.css"
import { fetchFooter } from "./actions/FooterActions"
import { fetchLandingPages } from "./actions/MenuActions"
import { connect } from 'react-redux'
import Home from './pages/Home'
import About from './pages/About'
import Article from './pages/Article'
import LandingPage from './pages/LandingPage'
import Header from './ui/Header'
import Footer from './ui/Footer'
import ArticleList from './ui/ArticleList'

class App extends Component {

  componentDidMount(){
    const { dispatch } = this.props
    fetchFooter(dispatch);
    fetchLandingPages(dispatch);
  }

  render() {

    return (
          <div className="App">
            <Header landingPages={this.props.landingPages}></Header>
            <Router history={browserHistory}>
              <Route path='/' component={Home} />
              <Route path='/about' component={About}/>
              <Route path='/post/:postId' component={Article}/>
              <Route path='/pages/:alias' component={LandingPage}/>
            </Router>
            <hr></hr>
            <Footer {...this.props.footer}></Footer>
          </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    footer : state.FooterReducers.footer,
    landingPages: state.MenuReducers.landingPages
  })
};

export default connect(mapStateToProps)(App);

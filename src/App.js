import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { fetchFooter } from "./actions/footerActions"
import { fetchLandingPages } from "./actions/menuActions"
// Import Pages
import Home from './container/Home'
import About from './container/About'
import Article from './container/Article'
import LandingPage from './container/LandingPage'
//Import Components
import Header from './components/Header'
import Footer from './components/Footer'
// Import style
//import "./scss/styles.css"

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
          <Route path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/post/:postId' component={Article}/>
          <Route path='/pages/:alias' component={LandingPage}/>
        </Router>
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

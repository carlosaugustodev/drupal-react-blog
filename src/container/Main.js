import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchFooter } from "../actions/footerActions"
import { fetchLandingPages } from "../actions/menuActions"

import Header from '../components/Header'
import Footer from '../components/Footer'
import Loading from '../components/Loading'
import '../styles/general.scss'

class Main extends Component {

  componentDidMount(){
    const { dispatch } = this.props
    fetchFooter(dispatch);
    fetchLandingPages(dispatch);
  }

  render() {
     if(this.props.loading) {
      return <Loading/>
     }

    return (

	    <div>
		    <Header landingPages={this.props.landingPages}></Header>
		      {this.props.children}
		    <Footer {...this.props.footer}></Footer>
	    </div>

    )
  }
}

const mapStateToProps = (state) => {
  return ({
    footer : state.FooterReducers.footer,
    landingPages: state.MenuReducers.landingPages,
    loading: state.CommonReducers.loading
  })
};

export default connect(mapStateToProps)(Main);

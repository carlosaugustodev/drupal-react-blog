import React from 'react';
import Home from '../src/container/Home';
import withStore from "../src/withStore"

import { fetchHomeArticle } from '../src/actions/articlesActions'
import "../src/scss/styles.css"

class root extends React.Component {

	static async getInitialProps({store, isServer, pathname, query}){
		fetchHomeArticle(store.dispatch)
	}

	render() {
		return <Home></Home>
	}
}


export default withStore()(root);

import React from 'react';
import Main from '../container/Main';
import Home from '../container/Home';
import Article from '../container/Article';
import LandingPage from '../container/LandingPage';
import withStore from "../withStore"
import { fetchSingleArticle } from '../actions/articlesActions'
import { mainFetch } from '../actions/commonActions'


const getComponent = (path = "") => {
	
	let component = {}

	if (path.indexOf('post') !== -1) {
		component = Article 
	} else if (path.indexOf('pages') !== -1) {
		component = LandingPage 
	} else {
		component = Home 
	}

	return component
}

class root extends React.Component {

	static async getInitialProps({store, isServer, pathname, query, asPath}){
		await getComponent(asPath).getInitialProps(store, isServer, pathname, query);
		await mainFetch(store.dispatch)
	}

	render() {
		
		const TagName = getComponent(this.props.url.asPath);
		
		return (
			<Main>
       			<TagName />
			</Main>
		)
	}
}


export default withStore()(root);
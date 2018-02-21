import React from 'react';
import Main from '../container/Main';
import Home from '../container/Home';
import Article from '../container/Article';
import LandingPage from '../container/LandingPage';
import withStore from "../withStore"
import { mainFetch } from '../actions/commonActions'

const components  = {
	"post" : Article,
	"pages" : LandingPage
}

const getComponent = (path = "") => {
	//Default component
	let component = Home

  Object.keys(components).map((key) => {
    if (path.indexOf(key) !== -1) {
      component = components[key]
    }
	});

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
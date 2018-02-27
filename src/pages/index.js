import React  from 'react';
import {compose} from 'redux';
import Main from '../container/Main';
import Home from '../container/Home';
import Article from '../container/Article';
import LandingPage from '../container/LandingPage';
import withStore from "../libs/withStore"
import { mainFetch } from '../actions/commonActions'

import { translate } from 'react-i18next';
import i18n from '../libs/i18n';
import { setLanguage } from '../libs/language';
import { setApolloClient } from '../libs/client.js'
import {setBasePath} from '../libs/BasePath';
import '../styles/general.scss'
import { initialize, addTranslationForLanguage,setActiveLanguage } from 'react-localize-redux';
import commonPt from '../locales/pt/common.json'
import commonEn from '../locales/en/common.json'

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

	startRootComponent() {

		if (this.props.url.query.lng) {
			const lngPath = `${this.props.url.query.lng}`
			setLanguage(lngPath && lngPath !== "" ? lngPath: 'en')
			setApolloClient();
			setBasePath(lngPath);
		} 
	}

	render() {
		
		this.startRootComponent();

		const TagName = getComponent(this.props.url.asPath);

		return (
			<div>
				<Main>
					<TagName />
				</Main>
			</div>
		)
	}
}

const Extended = translate(['common'], { i18n, wait: process.browser })(root);

// Passing down initial translations
// use req.i18n instance on serverside to avoid overlapping requests set the language wrong
Extended.getInitialProps = async (props) => {

	if (!props.req.baseUrl && props.req.originalUrl === "/") {
		props.res.writeHead(302, {
        	Location: '/en/'
      	})
      	props.res.end()
		return 
	}

	setLanguage(props.req.lng ? props.req.lng : 'en')
	setApolloClient();
	
	const languages = [
	  { name: 'English', code: 'en' },
	  { name: 'Porguese', code: 'pt' },
	];

	props.store.dispatch(initialize(languages));
	props.store.dispatch(addTranslationForLanguage(commonEn, 'en'));
	props.store.dispatch(addTranslationForLanguage(commonPt, 'pt'));
	props.store.dispatch(setActiveLanguage(props.req.lng));

	await getComponent(props.asPath).getInitialProps(props.store, props.isServer, props.pathname, props.query);
	await mainFetch(props.store.dispatch)
	if (props.req && !process.browser) {
		const returnValue = i18n.getInitialProps(props.req, ['common'])
		translate.setI18n(i18n);
		return returnValue;
	}

	return {};
};

export default withStore()(Extended);

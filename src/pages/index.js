import React  from 'react';
import {compose} from 'redux';
import Main from '../container/Main';
import Home from '../container/Home';
import Article from '../container/Article';
import LandingPage from '../container/LandingPage';
import withStore from "../withStore"
import { mainFetch } from '../actions/commonActions'

import { translate } from 'react-i18next';
import i18n from '../i18n';
import {setBasePath} from '../lib/BasePath';
import '../styles/general.scss'

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

	render() {
		
		if (this.props.url.query.lng) {
			setBasePath(`/${this.props.url.query.lng}/`);
		} else {
			setBasePath(`/en/`);
		}

		const TagName = getComponent(this.props.url.asPath);

		return (
			<div>
				<h1 className="test-carlos">{this.props.t('hello')}</h1>
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
	//basePathClass.setBasePath(`/pt/`)
  await getComponent(props.asPath).getInitialProps(props.store, props.isServer, props.pathname, props.query);
  await mainFetch(props.store.dispatch)
  if (props.req && !process.browser) return i18n.getInitialProps(props.req, ['common']);
  return {};
};

export default withStore()(Extended);

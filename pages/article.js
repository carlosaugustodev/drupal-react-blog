import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';
import About from '../src/container/About';
import Article from '../src/container/Article';
import { ApolloProvider } from 'react-apollo'
import client from '../src/client'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducer from "../src/reducers/reducers"
import withRedux from "next-redux-wrapper";

import "../src/scss/styles.css"

// import { fetchSingleArticle } from '../actions/articlesActions'



import { fetchSingleArticle } from '../src/actions/articlesActions'

let store = createStore(reducer)

const makeStore = (initialState, options) => {
    return createStore(reducer, initialState);
};


class root extends React.Component {

	static async getInitialProps({store, isServer, pathname, query}){
		
		fetchSingleArticle(store.dispatch, query.id);
	}

	render() {
		return (
			
			<Article></Article>
			
		)
	}
}


export default withRedux(makeStore)(root);
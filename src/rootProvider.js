import React from 'react';
import App from './App';
import { ApolloProvider } from 'react-apollo'
import client from './client'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from "./reducers/reducers"

let store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const root = () => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App client={client}/>
      </ApolloProvider>
    </Provider>
  )
}

export default root;

import React, { Component } from 'react';
import Header from './ui/Header'
import Home from './pages/Home'
import About from './pages/About'
import Article from './pages/Article'
import LandingPages from './pages/LandingPages'
import Footer from './ui/Footer'
import { Router, Route, browserHistory } from 'react-router'
import gql from 'graphql-tag'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import "../scss/menu.css"

const httpLink = new HttpLink({ uri: 'http://decoup2.dd:8083/graphql' })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

class App extends Component {



  render() {
    return (
      <div className="App">

        <ApolloProvider client={client}>

          <div>
            <Header></Header>

            <Router history={browserHistory}>
              <Route path='/' component={Home}/>
              <Route path='/about' component={About}/>
              <Route path='/post/:postId' component={Article}/>
              <Route path='/pages/:alias' component={LandingPages}/>
            </Router>
          </div>
        </ApolloProvider>
        <hr></hr>
        <Footer></Footer>

      </div>
    )
  }
}

export default App;

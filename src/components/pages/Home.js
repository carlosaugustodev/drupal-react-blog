import React from 'react';
import Masthead from '../ui/Masthead'
import ArticleList from '../ui/ArticleList'
import { ArticlesHomeList } from '../queries/ArticlesQueries.js'

const Home = ({data}) => {

  return (
    <div>
      <Masthead title={'Home'} subtitle="Subtitle Home" imageUrl="/img/home-bg.jpg"/>

      { !data.loading ?
          <ArticleList articles={data.nodeQuery.entities} ></ArticleList>
          : <div>Loading</div>
      }

    </div>
  )
}



export default ArticlesHomeList(Home);

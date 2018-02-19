import React from 'react';
import Parser from 'html-react-parser';

const AticleBody = ({ article }) => {

    return (
      <article>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              {(article.body) ? Parser(article.body.value) : ''}
            </div>
          </div>
        </div>
      </article>
    )
}

export default AticleBody;

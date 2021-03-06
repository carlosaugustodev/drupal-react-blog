import React from 'react';
import { getBasePath } from '../libs/basePath';

const ArticleItem = ({ article }) => {

    return (
      <div>
        <div className="post-preview">
          <a href={getBasePath() + "post/" + article.entityId}>
            <h2 className="post-title">
              {article.entityLabel}
            </h2>
            <h3 className="post-subtitle">
              { (article.body) && (article.body.summary) ? article.body.summary.substring(1, 100) : ''}
            </h3>
          </a>
          <p className="post-meta">Posted by
            <a href="#"> {article.entityOwner.entityLabel} </a>
            on {article.entityCreated}</p>
        </div>
        <hr />
      </div>
    )
}

export default ArticleItem;

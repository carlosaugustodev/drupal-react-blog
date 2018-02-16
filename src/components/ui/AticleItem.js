import React from 'react';

const AticleItem = ({ article }) => {

    return (
      <div>
        <div className="post-preview">
          <a href={"post/" + article.entityId}>
            <h2 className="post-title">
              {article.entityLabel}
            </h2>
            <h3 className="post-subtitle">
              {console.log(article.body)}
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
export default AticleItem;

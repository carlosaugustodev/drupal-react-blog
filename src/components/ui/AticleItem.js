import React from 'react';

const AticleItem = ({ article }) => {

    return (
      <div>
        <div class="post-preview">
          <a href={"post/" + article.entityId}>
            <h2 class="post-title">
              {article.entityLabel}
            </h2>
            <h3 class="post-subtitle">
              {article.body.summary.substring(1, 100)}
            </h3>
          </a>
          <p class="post-meta">Posted by
            <a href="#"> {article.entityOwner.entityLabel} </a>
            on {article.entityCreated}</p>
        </div>
        <hr />
      </div>
    )
}
export default AticleItem;

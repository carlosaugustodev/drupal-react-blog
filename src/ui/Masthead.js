import React from 'react'
import Loading from '../ui/Loading'

const Masthead = ({title, subtitle, author, created, imageUrl}) => {
  const style = {
    backgroundImage : `url(${imageUrl})`,

  }

  if (!title) {
    return <Loading/>
  }

  return (
    <header className="masthead" style={style}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="post-heading">
              <h1>{title}</h1>
              <h2 className="subheading">{subtitle ? subtitle.substring(0, 100) : ''}</h2>
              { author != undefined ?
                <span className="meta">Posted by
                  <a href="#"> {author} </a>
                  {created}</span>
                : ''
              }
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Masthead;

import React from 'react';
import style from '../styles/components/loading.css'
import withStyle from '../lib/WithStyle'

const Loading = () =>
  <div>
    { withStyle(style) }
    <div className="loader"></div>
  </div>


export default Loading;

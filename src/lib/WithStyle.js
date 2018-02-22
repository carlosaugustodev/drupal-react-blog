import React from 'react';
import NextHead from 'next/head'

const WithStyle = (stylesheet) => {
  return (
    <NextHead>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </NextHead>
  )
}

export default WithStyle;

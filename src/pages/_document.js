import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render() {
    return (
      <html lang="en">
        <Head>

          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="description" content="" />
          <meta name="author" content="" />

          <title>PoC Blog - Start Bootstrap Theme</title>

          <link href="/static/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
          <link href="/static/vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
          <link href="/static/css/styles.css" rel="stylesheet" />

        </Head>

        <body>

          {this.props.customValue}

          <Main />

          <script src="/static/vendor/jquery/jquery.min.js"></script>
          <script src="/static/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

          <NextScript />

        </body>
      </html>
    )
  }
}

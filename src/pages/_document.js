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
          <link href='https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet' type='text/css' />
          <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css' />

          <link href="/static/css/clean-blog.min.css" rel="stylesheet" />
        </Head>

        <body>

          {this.props.customValue}

          <Main />

          <script src="/static/vendor/jquery/jquery.min.js"></script>
          <script src="/static/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
          <script src="/static/js/clean-blog.min.js"></script>

          <NextScript />

        </body>
      </html>
    )
  }
}

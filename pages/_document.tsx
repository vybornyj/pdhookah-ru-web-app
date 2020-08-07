import Document, { Head, Html, Main, NextScript } from 'next/document'

class AppDocument extends Document {
  public static getInitialProps = async (ctx: any) => await Document.getInitialProps(ctx)

  public render = () => {
    const appName = 'Кальяны МСК'
    const appMainColor = '#808080'

    return (
      <Html lang='ru' dir='ltr'>
        <Head>
          <link rel='icon' href='/favicon.ico' />
          <meta name='application-name' content={appName} />
          <meta name='apple-mobile-web-app-title' content={appName} />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='theme-color' content={appMainColor} />
          <meta name='apple-mobile-web-app-status-bar-style' content={appMainColor} />
          <meta name='format-detection' content='telephone=no' />
          <meta name='msapplication-TileColor' content={appMainColor} />

          <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap' />
          <style dangerouslySetInnerHTML={{ __html: `html { font-family: 'Noto Sans', sans-serif; }` }} />
        </Head>
        <body>
          <div id='__background' />
          <script
            dangerouslySetInnerHTML={{
              __html: 'if (window?.__REACT_DEVTOOLS_STORE_HOOK__) window.__REACT_DEVTOOLS_STORE_HOOK__.inject = function () {}'
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default AppDocument

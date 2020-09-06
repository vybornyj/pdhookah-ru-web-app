// https://realfavicongenerator.net
// http://romannurik.github.io/AndroidAssetStudio/index.html
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'

class AppDocument extends Document {
  public static getInitialProps = async (ctx: DocumentContext) => await Document.getInitialProps(ctx)

  public render = () => {
    const appName = 'Подводный Дым'
    const appMainColor = '#10131c'

    return (
      <Html lang='ru' dir='ltr'>
        <Head>
          <meta name='application-name' content={appName} />
          <meta name='apple-mobile-web-app-title' content={appName} />

          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-capable' content='yes' />

          <meta name='theme-color' content={appMainColor} />
          <meta name='apple-mobile-web-app-status-bar-style' content={appMainColor} />
          <meta name='msapplication-TileColor' content={appMainColor} />

          <meta name='format-detection' content='telephone=no' />

          <link rel='manifest' href='/site.webmanifest' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
          <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
          <link rel='mask-icon' href='/safari-pinned-tab.svg' color={appMainColor} />

          <link rel='preload' href='https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap' as='style' />
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

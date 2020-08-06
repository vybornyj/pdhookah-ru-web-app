import { FunctionComponent } from 'react'
import { GlobalAlertPopup } from 'src/components/common/global/GlobalAlertPopup'

export const GlobalWrapper: FunctionComponent = ({ children }) => {
  return (
    <>
      <GlobalAlertPopup />

      {children}

      <style jsx global>{
        /* language=CSS */ `
          /* GLOBAL VARIABLES ----------------------------------------------------------------------------------------------------------------------- */
          :root {
            --app-transition: 0.15s all ease-out;
            --app-gradient-gold: linear-gradient(240deg, hsl(38, 100%, 66%) -30%, hsl(38, 78%, 40%) 115%);
            --app-font: 'Noto Sans', serif;
            --app-font-alt: 'nickelodeon-headline', sans-serif;
          }

          /* GLOBAL STYLES -------------------------------------------------------------------------------------------------------------------------- */
          @font-face {
            font-family: 'nickelodeon-headline';
            src: url('/assets/fonts/nickelodeon-2001-headline.ttf');
            font-weight: bold;
            font-style: normal;
          }

          #__background {
            position: fixed;
            z-index: -1;
            top: -100px;
            right: 0;
            bottom: -100px;
            left: 0;
          }

          :focus {
            outline: none;
          }

          html {
            user-select: none;
          }

          body {
            margin: 0;
            width: 100%;
            height: 100vh;
            overflow: hidden scroll;
          }

          article {
            display: inline;
          }

          img {
            pointer-events: none;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          a:hover {
            color: inherit;
          }

          hr {
            border-width: 1px 0 0 0;
            border-color: gray;
            border-style: solid;
            margin: 20px 0;
          }

          p {
            padding: 18px 0;
            margin: 0;
          }
          main {
            margin-top: -10px;
            width: 100%;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          section {
            margin: auto;
            width: 1200px;
          }

          .container {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: white;
            background: #10131b;
          }

          header {
            background: url('/assets/images/main/layer1.png') no-repeat;
            width: 100%;
          }

          .header-wrapper {
            margin: auto;
            width: 1200px;
          }

          .effects1 {
            background: url('/assets/images/isky.png');
            position: absolute;
            width: 1435px;
            height: 959px;
            left: -823px;
            top: -104px;
            filter: blur(10px);
          }

          .kubik {
            position: absolute;
            width: 179px;
            height: 176px;
            left: 83px;
            top: 75px;
            background: url('/assets/images/kubik-main.png') center;
            transform: matrix(-0.81, -0.59, -0.59, 0.81, 0, 0);
          }

          .top-line {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            flex-wrap: wrap;
            margin: 20px 0;
            text-align: center;
            z-index: 2;
            position: relative;
          }

          .logo-text {
            margin-top: -30px;

            font-family: var(--app-font);
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 16px;
            text-align: center;
          }

          .top-line .phone {
            margin-right: 20px;
          }

          .phone-number {
            margin-top: 20px;
            font-weight: bold;
            font-size: 20px;
            font-family: var(--app-font-alt);
          }

          .phone-callback a {
            text-decoration: underline;
            color: #f5f5f5;
            font-size: 14px;
          }

          .offer-wrapper {
            position: relative;
            width: 1200px;
            margin-bottom: 200px;
          }

          .offer {
            padding: 10px;
            z-index: 10;
          }

          .offer-info > h3 {
            font-size: 22px;
            font-weight: normal;
          }

          .offer-info > p {
            width: 500px;
            padding: 0;
            font-size: 14px;
          }

          .offer ul {
            list-style-image: url('/assets/images/main/bullet.png');
            padding-left: 20px;
            margin: 10px 0;
          }

          .offer li {
            margin: 10px 0;
          }

          .offer-text-large {
            text-transform: uppercase;
            font-size: 61px;
            line-height: 74px;
            margin: 0 0 26px;

            font-weight: bold;
            font-family: var(--app-font-alt);
          }

          .offer-text-large > span {
            color: steelblue;
          }

          .offer-buttons {
            margin-top: 100px;
          }

          .offer-buttons > div {
            text-transform: uppercase;
            display: inline-block;
            line-height: 69px;
            /*border: 2px solid goldenrod;*/
            box-shadow: 0px 6px 9px rgba(0, 0, 0, 0.4);
            border-radius: 12px;
            margin-right: 40px;
            width: 330px;
            text-align: center;
            font-size: 18px;
            letter-spacing: 1px;
          }

          .social-links {
            position: absolute;
            top: 55px;
            left: -125px;
            text-transform: uppercase;
            font-size: 20px;
          }

          .social-links > div {
            height: 120px;
            transform: rotate(-90deg);
            margin-bottom: 90px;
          }

          .social-links > div > img {
            transform: rotate(90deg);
          }

          .social-links > div > span {
            margin-left: 20px;
          }

          .social-item {
            position: relative;
          }

          .social-item .img-wrap {
            width: 36px;
            height: 36px;
            top: 0;
            left: 0;
            margin-left: -5px;
            border-radius: 18px;
            position: absolute;
            /*background: linear-gradient(261.22deg, #ffbf50 -31.06%, #b67b16 115.79%);*/
          }

          /* GLOBAL HELPERS ------------------------------------------------------------------------------------------------------------------------- */

          h1.global,
          h2.global,
          h3.global,
          h4.global,
          h5.global,
          h6.global {
            padding: 20px 10px 10px 10px;
            margin: 0;
            color: hsl(210, 100%, 20%);
          }

          div.global-column {
            display: flex;
            flex-direction: column;
          }

          div.global-row {
            display: flex;
            flex-direction: row;
          }

          div.global-center {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
          }

          div.global-wrap {
            display: flex;
            flex-wrap: wrap;
          }

          div.global-flex-1-0 {
            flex: 1 0;
          }

          div.global-box-500,
          div.global-box-600,
          div.global-box-1400 {
            width: 100%;
            background: hsla(0, 0%, 100%, 0.8);
            box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.4), 0 3px 4px 0 rgba(0, 0, 0, 0.28), 0 1px 8px 0 rgba(0, 0, 0, 0.24);
            border-radius: 4px;
          }

          div.global-box-500 {
            max-width: 500px;
            margin: 20px auto 0 auto;
            padding: 0 10px 10px 10px;
          }

          div.global-box-600 {
            max-width: 600px;
            margin: 10px auto 10px auto;
            padding: 10px;
          }

          div.global-box-1400 {
            max-width: 1400px;
            margin: 20px auto 0 auto;
            padding: 10px;
          }

          /* GLOBAL MEDIA HELPERS ------------------------------------------------------------------------------------------------------------------- */

          div.column767-row768,
          div.column1023-row1024 {
            display: flex;
            flex-direction: column;
          }

          @media screen and (min-width: 768px) {
            div.column767-row768 {
              flex-direction: row;
            }
          }

          @media screen and (min-width: 1024px) {
            div.column1023-row1024 {
              flex-direction: row;
            }
          }

          /* GLOBAL MEDIA DISPLAY NONE HELPERS ------------------------------------------------------------------------------------------------------ */

          div.display768,
          div.display1024 {
            display: none;
          }

          @media screen and (min-width: 768px) {
            div.display768 {
              display: initial;
            }
          }

          @media screen and (min-width: 1024px) {
            div.display1024 {
              display: initial;
            }
          }
        `
      }</style>
    </>
  )
}

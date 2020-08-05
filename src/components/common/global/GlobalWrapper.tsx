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

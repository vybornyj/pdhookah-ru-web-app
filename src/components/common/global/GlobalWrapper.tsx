import { FunctionComponent } from 'react'

export const GlobalWrapper: FunctionComponent = ({ children }) => {
  return (
    <>
      {children}

      <style jsx global>{
        /* language=CSS */ `
          /* GLOBAL VARIABLES --------------------------------------------------------------------------------------------------------------------- */
          :root {
            --app-transition: 0.15s all ease-out;
            --app-gradient-gold: linear-gradient(240deg, hsl(38, 100%, 66%) -30%, hsl(38, 78%, 40%) 115%);
            --app-font: 'Noto Sans', serif;
            --app-font-alt: 'nickelodeon-headline', sans-serif;
          }

          /* GLOBAL STYLES ------------------------------------------------------------------------------------------------------------------------ */
          @font-face {
            font-family: 'nickelodeon-headline';
            src: url(/fonts/nickelodeon-2001-headline.ttf);
            font-weight: bold;
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
            display: inline-block;
            width: 100vw;
            min-height: 100vh;
            overflow: hidden scroll;
          }

          @media screen and (min-width: 800px) {
            body {
              padding-right: 14px;
            }
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

          /* GLOBAL HELPERS ----------------------------------------------------------------------------------------------------------------------- */
          .steelblue {
            color: steelblue;
          }

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

          .global-center {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
          }

          .global-text-center {
            text-align: center;
          }

          div.global-wrap {
            display: flex;
            flex-wrap: wrap;
          }

          div.global-flex-1-0 {
            flex: 1 0;
          }

          /* GLOBAL MEDIA HELPERS ----------------------------------------------------------------------------------------------------------------- */

          div.column767-row768,
          div.column1023-row1024,
          div.column1199-row1200 {
            display: flex !important;
            flex-direction: column !important;
          }

          @media screen and (min-width: 768px) {
            div.column767-row768 {
              flex-direction: row !important;
            }
          }

          @media screen and (min-width: 1024px) {
            div.column1023-row1024 {
              flex-direction: row !important;
            }
          }

          @media screen and (min-width: 1200px) {
            div.column1199-row1200 {
              flex-direction: row !important;
            }
          }

          /* GLOBAL MEDIA DISPLAY NONE HELPERS ---------------------------------------------------------------------------------------------------- */

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

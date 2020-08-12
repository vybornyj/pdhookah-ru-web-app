import Head from 'next/head'
import { FunctionComponent } from 'react'
import { GlobalAlertPopup } from 'src/components/common/global/GlobalAlertPopup'

export const GlobalWrapper: FunctionComponent = ({ children }) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

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
            background-size: cover;
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
            margin-top: 38px;
          }

          .offer {
            padding: 0 10px;
            z-index: 10;
          }

          .offer-info > h3 {
            font-family: Noto Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 24px;
            line-height: 33px;
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
            margin: 15px 0;
          }

          .offer-text-large {
            text-transform: uppercase;
            font-size: 61px;
            line-height: 74px;
            margin: 0 0 40px;

            font-weight: bold;
            font-family: var(--app-font-alt);
          }

          .offer-text-large > span {
            color: steelblue;
          }

          .offer-buttons {
            margin-top: 100px;
          }

          .offer-buttons > a {
            margin-right: 40px;
          }

          .social-links {
            position: absolute;
            top: 20px;
            left: -115px;
            text-transform: uppercase;
            font-family: Noto Sans, serif;
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 25px;
          }

          .social-links > div {
            height: 120px;
            transform: rotate(-90deg);
            margin-bottom: 103px;
          }

          .social-links > div > img {
            transform: rotate(90deg);
          }

          .social-links > div > span {
            margin-left: 25px;
          }

          .social-item {
            position: relative;
          }

          .social-item .img-wrap {
            width: 36px;
            height: 36px;

            margin-left: -5px;
            border-radius: 18px;
            position: absolute;
            background: linear-gradient(261.22deg, #ffbf50 -31.06%, #b67b16 115.79%);
          }

          .social-item:nth-child(1) div {
            top: -4px;
            left: -1px;
          }

          .social-item:nth-child(2) div {
            top: -4px;
            left: -3px;
          }

          .social-item:nth-child(3) div {
            top: -4px;
            left: -9px;
          }

          footer .social-links {
            display: none;
          }

          @media screen and (max-width: 1440px) {
            section,
            .header-wrapper,
            footer > div,
            .our-benefits {
              width: 100% !important;
            }

            .offer-wrapper {
              margin-bottom: 100px !important;
              width: 100%;
            }

            .social-links {
              margin-top: 50px;
              margin-right: 8%;
              display: flex;
              justify-content: space-around;
              position: relative;
              left: 0;
            }

            .social-links > div {
              height: auto;
              margin: 0 !important;
              transform: rotate(0deg) !important;
            }

            .social-item img {
              transform: rotate(0deg) !important;
            }
          }

          @media screen and (max-width: 1024px) {
            .social-links {
              display: none;
            }
            footer .social-links {
              display: flex !important;
              width: 100%;
            }
            footer .social-links span {
              display: none;
            }

            section,
            .header-wrapper,
            .effects1,
            .offer-wrapper,
            .offer-info > p,
            footer > div,
            footer {
              width: auto !important;
            }

            .top-line .phone {
              margin: auto;
            }

            .top-line .logo {
              margin: auto;
            }

            .logo svg {
              width: 100%;
            }

            .hookah {
              display: none;
              left: 0 !important;
            }

            .offer-wrapper {
              margin-bottom: 50px;
            }

            .offer-text-large {
              font-size: 2rem;
              line-height: normal;
            }

            .offer-title-small,
            .offer-text-large,
            .offer h4 {
              text-align: center;
            }

            .offer ul {
              font-size: 1rem;
              padding-left: 15%;
            }

            .offer-info > p {
              padding: 0 15px;
            }

            .offer-buttons {
              margin-top: 30px;
              display: flex;
              flex-direction: column;
            }

            .offer-buttons > a {
              margin: 10px auto;
            }

            footer {
              margin-top: -140px;
            }

            footer svg {
              display: none;
            }

            footer > div {
              flex-direction: column;
            }

            footer > div > div {
              margin: 5px auto !important;
            }

            /***  HOME RENTAL  ***/

            .container-do-it-yourself,
            .best-decision,
            .reasons-to-order-container,
            .our-benefits,
            .home-order-container,
            .make-call-order > div,
            .configure-hookah,
            .container-how-it-works > div,
            .reasons-benefits > div,
            .best-decision p,
            .make-call-order h3,
            .reasons-list-item,
            .hookah-kit > div {
              width: auto !important;
            }

            .container-do-it-yourself,
            .make-call-order,
            .how-it-works,
            .reasons-to-order {
              margin: 0 !important;
            }

            .make-call-order p {
              display: inline-block !important;
              text-align: center;
            }

            .reasons-benefits > div {
              margin: 10px !important;
              text-align: left;
            }

            .reasons-benefits > div:nth-child(1) > img {
              margin-right: 21px !important;
            }

            .reasons-list > div {
              justify-content: space-around;
            }

            .reasons-to-order {
              text-align: center;
            }

            .reasons-list-item {
              width: 30%;
              display: flex;
              flex-direction: column;
            }
            .best-decision-block img,
            .reasons-to-order > div > img {
              display: none;
              position: initial !important;
            }

            section.configure {
              margin-left: 0 !important;
            }

            .home-order-list,
            .reasons-to-order,
            .make-call-order,
            .our-benefits > div,
            .how-it-works,
            .container-how-it-works,
            footer > div {
              flex-direction: column !important;
            }

            .container-how-it-works img {
              display: none;
            }

            .container-how-it-works {
              text-align: center;
              margin-top: 50px;
            }

            .container-how-it-works p {
              text-align: left;
              padding: 10px 15px !important;
            }

            .our-benefits {
              text-align: center;
            }

            .our-benefits > div {
              margin: 0 0 6% 0;
            }
            .our-benefits > div > img {
              width: 92%;
              margin-bottom: 6%;
            }

            .our-benefits > div > div {
              padding: 0 !important;
            }

            .our-benefits p {
              padding: 10px 15px !important;
              text-align: left;
            }

            .configure-hookah {
              padding: 0 !important;
            }
            .configure-hookah h2 {
              text-align: center;
              font-size: 30px;
            }

            .configure-hookah h3 {
              text-align: center;
              font-size: 24px;
            }

            .configure-hookah .modes {
              display: block;
              text-align: center;
            }

            .configure-hookah .modes div {
              display: inline-block;
            }
            .configure-hookah .hookah-kit {
              flex-direction: column;
              margin-left: 5%;
            }

            .make-call-order > div:nth-child(1) {
              border-right: none !important;
            }

            .make-call-order > div {
              padding: 0 !important;
              /*margin: 0 10px !important;*/
              text-align: center;
            }

            .order-container > div:nth-child(1) {
              text-align: center;
              flex-direction: column;
              align-self: center;
              margin-bottom: 20px;
            }

            .order-container > div {
              margin-bottom: 30px !important;
            }

            .order-result {
              align-self: center;
            }

            .make-call-order-phone {
              margin-bottom: 20px;
              font-size: 18px !important;
            }

            .make-call-order,
            .best-decision {
              margin-top: 30px !important;
            }

            .step-by-step {
              margin: 50px 0 -60px !important;
            }

            .home-order-container,
            .reasons-list {
              text-align: center;
            }
            .best-decision-block h3 {
              text-align: center;
            }

            .home-order h2,
            .reasons-to-order-container h2,
            .best-decision h2,
            .our-benefits h2,
            .make-call-order h3 {
              text-align: center;
              font-size: 24px !important;
              line-height: normal !important;
            }
            .home-order-list {
              display: block !important;
            }

            .home-order-list-item {
              padding: 10px 15px;
              width: 50%;
              height: auto !important;
              display: inline-block;
              vertical-align: top;
            }

            .information {
              padding: 0 15px !important;
            }

            .information ul {
              padding-left: 25px;
            }

            .fixedPrice {
              width: 60px !important;
              height: 60px !important;
              right: 15px !important;
              bottom: 15px !important;
            }
            .price {
              font-size: 16px !important;
              width: 95px !important;
              right: 0 !important;
              bottom: 82px !important;
            }

            /*** CATERING ***/

            .hookah-catering,
            .event-calculate-form,
            .event-calculate-form > div,
            .event-organize,
            .hookah-catering > div > div:nth-child(1) {
              width: auto !important;
            }

            .event-calculate-form {
              padding: 0 !important;
              text-align: center;
            }
            .event-calculate h2,
            .hookah-catering h2,
            .event-organize h2 {
              text-align: center;
              font-size: 24px !important;
              line-height: normal !important;
            }

            .event-calculate-form > div {
              padding: 10px !important;
            }

            .first > div {
              flex-direction: column;
              align-items: self-end;
            }

            .first > div > div {
              margin: 10px 0 !important;
            }

            .event-calculate-form > div > div,
            .second-third {
              display: flex;
              flex-direction: column !important;
              align-items: center;
            }

            .event-calculate-form > div > div,
            .third {
              text-align: center !important;
              margin-top: 20px !important;
              margin-bottom: 20px !important;
            }

            .event-calculate-form input {
              display: inline-block;
            }

            /* Вложенность для набора специфичности и применения стилей */
            div > div > div > .blue {
              line-height: normal !important;
              padding: 10px 15px !important;
            }

            select {
              width: auto !important;
              margin: 0 !important;
            }

            .hookah-catering img {
              display: none;
            }
            .hookah-catering,
            .event-organize {
              padding: 0 15px !important;
            }
            .event-organize > div {
              flex-direction: column;
            }

            .event-organize > div > div > img {
              width: 100%;
            }

            .event-organize > div > div:nth-child(1) {
              margin: 0 !important;
            }

            .order-container > div:nth-child(1) {
              padding: 0 !important;
            }
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

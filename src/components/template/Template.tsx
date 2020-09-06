import React, { FunctionComponent } from 'react'
import { TemplateFooter1 } from 'src/components/template/TemplateFooter1'
import { TemplateFooter2 } from 'src/components/template/TemplateFooter2'
import { TemplateHead } from 'src/components/template/TemplateHead'
import { TemplateHeader } from 'src/components/template/TemplateHeader'

interface Props {
  type?: 'rent' | 'catering'
  title?: string
  description?: string
}

export const Template: FunctionComponent<Props> = ({ type, title, description, children }) => {
  return (
    <>
      <TemplateHeader type={type} />
      <TemplateHead title={title} description={description} />

      <div className='template'>
        {children}
        <TemplateFooter1 />
        <TemplateFooter2 />
      </div>

      <style jsx global>{
        /* language=CSS */ `
          h1,
          h2,
          h3,
          h4 {
            text-transform: uppercase;
          }

          body {
            background: hsl(224, 26%, 8%);
          }

          #__background {
            background: hsl(224, 26%, 8%);
          }

          section {
            color: white;
            width: 100%;
            padding: 0 5vw;
            position: relative;
            margin: 20px auto;
            max-width: 1300px;
          }

          /* ... */

          @media screen and (max-width: 1023px) {
            .hookah {
              display: none;
              left: 0 !important;
            }

            .offer h4 {
              text-align: center;
            }

            .offer ul {
              font-size: 1rem;
              padding-left: 15%;
            }

            .offer-buttons {
              margin-top: 30px;
              display: flex;
              flex-direction: column;
            }

            .offer-buttons > a {
              margin: 10px auto;
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

            .width-auto {
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

            .home-order-list,
            .reasons-to-order,
            .make-call-order,
            .our-benefits > div,
            .how-it-works,
            .container-how-it-works {
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
        `
      }</style>

      <style jsx>{
        /* language=CSS */ `
          .template {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            color: white;
          }
        `
      }</style>
    </>
  )
}

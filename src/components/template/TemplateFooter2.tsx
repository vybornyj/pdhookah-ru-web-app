import getConfig from 'next/config'
import Link from 'next/link'
import React, { FunctionComponent } from 'react'
import { SvgLogo } from 'src/components/common/svgs/SvgLogo'

const {
  publicRuntimeConfig: { PHONE_VIEW, PHONE_LINK }
} = getConfig()

export const TemplateFooter2: FunctionComponent = () => (
  <section>
    <div className='f1'>
      <img src='/images/main/visa.png' />
      <img src='/images/main/master-card.png' />
      <img src='/images/main/yandex-money.png' />
    </div>
    <div className='f2'>
      <div className='all'>
        <div className='logo'>
          <SvgLogo />
        </div>

        <div className='links-n-phone'>
          <div className='links'>
            <Link href='/arenda-i-dostavka-kalyana-na-dom'>
              <a className='link'> Заказ и аренда кальянов</a>
            </Link>

            <Link href='/kalyannyj-kejtering-v-moskve'>
              <a className='link'> Кальянный кейтеринг</a>
            </Link>
          </div>

          <a href={`tel:${PHONE_LINK}`} className='phone'>
            {PHONE_VIEW}
          </a>
        </div>
      </div>

      {/* <SocialLinks className='in-footer' /> */}
    </div>

    <style jsx>{
      /* language=CSS */ `
        .logo,
        .link,
        .phone {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
        .all {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .links {
          /*background: goldenrod;*/
          display: flex;
          flex-direction: column;
        }
        .link,
        .phone {
          padding: 10px;
        }
        .links-n-phone {
          /*background: aqua;*/
          display: flex;
          flex-direction: column;
        }
        .phone {
          font-size: 20px;
          font-family: var(--app-font-alt);
        }

        img {
          height: 30px;
          margin-right: 25px;
        }
        @media screen and (min-width: 768px) {
          .all {
            flex-direction: row;
            justify-content: space-between;
          }
          .links {
            align-items: flex-end;
          }

          .phone {
            text-align: right;

            margin-top: 20px;
            justify-content: flex-end;
          }
        }
        @media screen and (min-width: 1024px) {
          .links {
            justify-content: flex-end;
          }
        }
        @media screen and (min-width: 1200px) {
          .all {
            align-items: flex-end;
          }
          .links {
            flex-direction: row;
            align-items: flex-end;
          }
          .links-n-phone {
            flex-direction: row;
            margin-bottom: 30px;
          }
        }
        .f1 {
          margin: 10px 0 30px 0;
        }
        .f2 {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          flex-wrap: wrap;
          align-items: flex-end;
        }
      `
    }</style>
  </section>
)

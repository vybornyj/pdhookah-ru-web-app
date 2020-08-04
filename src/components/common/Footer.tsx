import Link from 'next/link'
import React, { FunctionComponent } from 'react'
import { SvgLogo } from 'src/components/common/SvgLogo'

export const Footer: FunctionComponent = () => (
  <footer>
    <div>
      <div>
        <Link href='/'>
          <a>
            <SvgLogo />
          </a>
        </Link>
      </div>
      <div>Заказ и аренда кальянов</div>
      <div>Кальянный кейтеринг</div>

      <div className='footer-phone'>+ 7 (925) 355-00-53</div>
    </div>
    <style jsx>{
      /* language=CSS */ `
        footer {
          width: 100%;
          margin-top: -200px;
        }

        footer > div {
          margin: auto;
          width: 1200px;
          padding: 55px 20px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          flex-wrap: wrap;
          align-items: flex-end;
        }

        footer > div > div:not(.footer-phone) {
          margin-right: 20px;
        }

        footer img {
          width: 250px;
        }

        .footer-phone {
          flex: 1;
          text-align: right;

          margin-top: 20px;
          font-weight: bold;
          font-size: 28px;
        }
      `
    }</style>
  </footer>
)

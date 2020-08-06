import { Button1 } from 'src/components/Button1'

export const MakeCallOrder = () => {
  return (
    <>
      <section>
        <div className='make-call-order'>
          <div>
            <h3>Доставка кальянов на дом (Москва) круглосуточно.</h3>
            <p>
              Круглосуточная доставка кальянов на дом в течение <span>90 минут</span>
            </p>
            {/* eslint-disable-next-line no-irregular-whitespace */}
            <p>Доставка осуществляется по Москве в любое удобное для вас время. Вы можете заказать кальян с любым вкусом: кислый, сладкий, свежий.</p>
            <div className='make-call-order-phone'>
              <img src='/assets/images/rent/callphone-icon.png' alt='' />+ 7 (925) 355-00-53
            </div>
          </div>
          <div className='order-result'>
            <div className='order-container'>
              <div>
                <span>
                  <b> Закажите обратный звонок</b>, и наш специалист <br /> соберет для вас идеальный кальян!
                </span>
              </div>
              <Button1>Заказать обратный звонок</Button1>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{
        /* language=CSS */ `
          h1,
          h2,
          h3,
          h4 {
            text-transform: uppercase;
          }

          .hookah {
            background: url('/assets/images/rent/hookah.png');
            position: absolute;
            width: 500px;
            height: 880px;
            left: 1075px;
            top: 114px;
          }

          main {
            background: #10131c;
            width: 100%;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          section.home-order {
            width: 100%;
          }

          .home-order-container {
            width: 1200px;
            margin: auto;
          }

          .home-order h2,
          .reasons-to-order h2 {
            font-size: 40px;

            line-height: 56px;
            font-family: var(--app-font-alt);
          }

          .home-order span,
          .reasons-to-order span {
            color: steelblue;
          }

          .home-order-list {
            display: flex;
            flex-direction: row;
          }

          .home-order-list-item {
            padding: 10px;
            width: 300px;
            height: 450px;
          }

          .home-order-list-item-circle {
            box-sizing: content-box;
            border: 2px dashed #f5f5f5;
            border-radius: 90px;

            width: 164px;
            height: 164px;
          }

          .home-order-list-item > div > div {
            margin: 20px;
            position: relative;
            border-radius: 90px;
            width: 124px;
            height: 124px;

            text-align: center;
            line-height: 124px;
            background: linear-gradient(261.22deg, #ffbf50 -31.06%, #b67b16 115.79%);
          }

          .home-order-list-item h3 {
            margin-bottom: 0;

            background: linear-gradient(238.8deg, #ffbf50 -31.06%, #b67b16 115.79%);
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
          }

          .home-order-list-item > p {
            padding-right: 10px;
            font-size: 16px;
            line-height: 18px;
          }

          /* REASONS TO ORDER */

          .reasons-to-order {
            width: 100%;
          }

          .reasons-to-order-container {
            margin: auto;
            width: 1200px;
          }

          .reasons-to-order h2 {
            font-family: var(--app-font-alt);
            font-size: 40px;
            line-height: 56px;
            margin-bottom: 50px;
          }

          .reasons-list > div {
            display: flex;
            flex-direction: row;
            text-transform: uppercase;
            margin-bottom: 40px;
          }

          .reasons-list-item {
            width: 250px;
          }

          .reasons-list-item > span {
            font-family: var(--app-font-alt);
            font-style: normal;
            font-weight: normal;
            /* identical to box height */
            color: #ffff00;
            background: linear-gradient(248.56deg, #ffbf50 -31.06%, #b67b16 115.79%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          span.twelve {
            display: inline-block;
            height: 40px;
            font-size: 33px;
            line-height: 46px;
          }
          span.thousand {
            display: inline-block;
            height: 40px;
            font-size: 34px;
            line-height: 48px;
          }
          span.kinds {
            display: inline-block;
            height: 40px;
            font-size: 32px;
            line-height: 45px;
          }
          span.five-ages {
            display: inline-block;
            height: 40px;
            font-size: 40px;
            line-height: 56px;
          }
          span.percents {
            display: inline-block;
            height: 50px;
            font-size: 33px;
            line-height: 46px;
          }

          .reasons-list-item > p {
            font-size: 14px;
            line-height: 22px;
            padding-top: 0;
            font-family: var(--app-font);
          }

          .reasons-benefits > div {
            display: flex;

            flex-direction: row;
            align-items: center;
            width: 650px;
            margin: 20px 0;
          }

          .reasons-benefits > div > img {
            margin-right: 15px;
          }

          /* YOU CAN'T CHOICE? */

          .make-call-order {
            margin-top: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .make-call-order > div:nth-child(1) {
            border-right: 1px white solid;
            width: 54%;
            padding-right: 60px;
          }

          .make-call-order > div:nth-child(1) span {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 7px;
            margin-left: 5px;
          }

          .make-call-order > div:nth-child(2) {
            width: 46%;
          }

          .make-call-order h3 {
            font-family: var(--app-font-alt);
            font-style: normal;
            font-weight: normal;
            font-size: 24px;
            line-height: 34px;
            text-transform: uppercase;
            margin-bottom: 20px;
          }

          .make-call-order p {
            font-family: var(--app-font);
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 22px;
            display: flex;
            align-items: center;
            padding: 10px 0;
          }

          .make-call-order-phone {
            font-family: var(--app-font-alt);
            font-style: normal;
            font-weight: normal;
            font-size: 36px;
            line-height: 51px;
          }

          .make-call-order-phone > img {
            width: 36px;
            margin-right: 14px;
          }

          .order-result {
            padding-left: 50px;
            display: flex;
            align-items: center;
          }

          .order-container > div {
            margin-bottom: 50px;
          }

          .order-container > div:nth-child(1) {
            display: flex;
            align-items: center;
          }

          @media (max-width: 600px) {
            .grid {
              width: 100%;
              flex-direction: column;
            }
          }
        `
      }</style>
    </>
  )
}

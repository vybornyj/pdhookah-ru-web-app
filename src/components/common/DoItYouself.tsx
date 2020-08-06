import { Button1 } from 'src/components/Button1'

export const DoItYourself = () => {
  return (
    <>
      <section>
        <div className='container-do-it-yourself'>
          <div className='make-call-order'>
            <div>
              <h3>
                Как сделать кальян. <span> Пошаговое руководство от эксперта.</span>
              </h3>

              <Button1 variant='yellow'>Посмотреть руководство</Button1>
            </div>
            <div className='order-result'>
              <div className='order-container'>
                <div>
                  <span>
                    Закажите обратный звонок, и <br /> наш специалист соберет для <br /> вас идеальный кальян!
                  </span>
                </div>
                <Button1>Заказать обратный звонок</Button1>
              </div>
            </div>
          </div>

          <div>
            <div>
              <img src='' alt='' />
            </div>
            <div>
              <img src='' alt='' />
            </div>
            <div>
              <img src='' alt='' />
            </div>
          </div>
        </div>
      </section>
      <style jsx>{
        /* language=CSS */ `
          /* YOU CAN'T CHOICE? */

          .container-do-it-yourself {
            width: 1200px;
            margin: 50px 20px;
            padding: 20px 0;
          }

          .make-call-order {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .make-call-order > div:nth-child(1) {
            border-right: 1px white solid;
            width: 62%;
            padding: 0 15px 40px 0;
          }

          .make-call-order > div:nth-child(1) span {
            background: linear-gradient(238.8deg, #ffbf50 -31.06%, #b67b16 115.79%);
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
          }

          .make-call-order > div:nth-child(2) {
            width: 38%;
          }

          .make-call-order h3 {
            font-family: 'Nickelodeon 2001 Headline', serif;
            font-style: normal;
            font-weight: normal;
            font-size: 35px;
            line-height: 60px;
            text-transform: uppercase;
          }

          .make-call-order p {
            font-family: Noto Sans, serif;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 22px;
            display: flex;
            align-items: center;
            padding: 10px 0;
          }

          .make-call-order-phone {
            font-family: 'Nickelodeon 2001 Headline', serif;
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
            padding-left: 60px;
            display: flex;
            align-items: center;
          }

          .order-container > div {
            height: 200px;
            margin-bottom: 30px;
          }
          .order-container > div > span {
            font-family: Noto Sans, serif;
            font-style: normal;
            font-weight: normal;
            font-size: 24px;
            line-height: 33px;
          }

          .order-container > div:nth-child(1) {
            display: flex;
            align-items: center;
          }
        `
      }</style>
    </>
  )
}

import { FunctionComponent } from 'react'
import { ButtonFeedback } from 'src/components/common/buttons/ButonFeedback'

export const CateringOrder: FunctionComponent = () => {
  return (
    <>
      <section>
        <div className='make-call-order'>
          <div>
            <h3>заказ кальянного кейтеринга</h3>
            <p>
              Для заказа кальянного кейтеринга позвоните нам по указанному на сайте телефону. Исходя из количества гостей на планируемом мероприятии,
              его формата, возрастной категории и прочих факторов, мы дадим вам рекомендации по тому, что именно выбрать и в каком количестве.
            </p>
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
              <ButtonFeedback />
            </div>
          </div>
        </div>
      </section>
      <style jsx>{
        /* language=CSS */ `
          .make-call-order {
            margin-top: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 20px;
          }

          .make-call-order > div:nth-child(1) {
            border-right: 1px white solid;
            width: 54%;
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

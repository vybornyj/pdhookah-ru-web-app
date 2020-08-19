import { FunctionComponent } from 'react'
import { ButtonFeedback } from 'src/components/common/buttons/ButonFeedback'

export const DeliveryHookahs: FunctionComponent = () => {
  return (
    <>
      <section>
        <div className='make-call-order'>
          <div>
            <h3>при заказе кальянного кейтеринга (Москва и МО) на мероприятие</h3>
            <p>Вы предоставляете гостям разнообразие времяпрепровождения и вносите в формат мероприятия</p>
            <div className='make-call-order-phone'>
              <img src='/assets/images/rent/callphone-icon.png' alt='' />+ 7 (925) 355-00-53
            </div>
          </div>
          <div className='order-result'>
            <div className='order-container'>
              <div>
                <span>
                  <b> Закажите обратный звонок</b>, и вы получите персональное предложение об организации кальянного кейтеринга для своего
                  мероприятия.
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
            padding-right: 70px;
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

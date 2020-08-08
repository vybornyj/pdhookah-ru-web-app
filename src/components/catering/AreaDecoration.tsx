import { ButtonFeedback } from 'src/components/common/buttons/ButonFeedback'

export const AreaDecoration = () => {
  return (
    <>
      <section className='area-decoration'>
        <div className='make-call-order'>
          <div>
            <h3>Оформление кальянной зоны</h3>
            <p>
              Кальянная зона оформляется в соответствии со стилистикой предстоящего мероприятия. Обратившись к нам, вы получите несколько вариантов по
              оформлению кальянной зоны, и выберет для себя наиболее подходящий.
            </p>
          </div>
          <div className='order-result'>
            <div className='order-container'>
              <div>
                <span>Закажите обратный звонок, и вы получите горячее предложение по оформлению кальянной зоны на мероприятии под ключ.</span>
              </div>
              <ButtonFeedback />
            </div>
          </div>
        </div>
      </section>
      <style jsx>{
        /* language=CSS */ `
          .area-decoration {
            margin: 50px 0;
          }

          .make-call-order {
            margin-top: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .make-call-order > div:nth-child(1) {
            border-right: 1px white solid;
            width: 54%;
            padding: 50px 65px;
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

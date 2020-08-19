import { FunctionComponent } from 'react'
import { ButtonFeedback } from 'src/components/common/buttons/ButonFeedback'

export const BestDecision: FunctionComponent = () => {
  return (
    <>
      <section className='best-decision-block'>
        <div className='container'>
          <div className='best-decision'>
            <h2>
              Кальян – <span> лучшее дополнение</span>
              <br /> к любой вечеринке
            </h2>
            <p>
              Расслабляющий дым кальяна станет приятным дополнением праздника в шумной и веселой компании, романтического свидания и приятных тихих
              встреч с друзьями. Соберите свой кальян онлайн прямо на сайте с помощью <span> онлайн конструктора</span> или просто закажите кальян по
              телефону. Заказать кальян на дом вы можете в любое время суток!
            </p>

            <h3>закажите обратный звонок</h3>
            <p>После отправки заявки, наш менеджер перезвонит вам в ближайшее время кальян будет доставлен на дом</p>

            <ButtonFeedback />
          </div>
          <div>
            <img src='/assets/images/rent/hookahs-best.png' alt='' />
          </div>
        </div>
      </section>

      <style jsx>{
        /* language=CSS */ `
          .best-decision-block img {
            position: absolute;

            left: 1099px;
            top: 4108px;
          }

          .best-decision {
            width: 1200px;
            padding: 10px;
          }

          .best-decision h2 {
            font-family: var(--app-font-alt);
            font-style: normal;
            font-weight: normal;
            font-size: 40px;
            line-height: 56px;
            text-transform: uppercase;
          }

          .best-decision h2 > span {
            background: linear-gradient(256.23deg, #ffbf50 -31.06%, #b67b16 115.79%);
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
          }

          .best-decision p {
            width: 500px;
            padding: 10px 0;
          }

          .best-decision p > span {
            color: #198fe7;
            font-weight: bold;
            text-decoration: underline;
          }

          .best-decision h3 {
            font-family: var(--app-font-alt);
            font-style: normal;
            font-weight: normal;
            font-size: 24px;
            line-height: 40px;
            letter-spacing: 1px;
            text-transform: uppercase;
            margin: 50px 0 10px;
          }

          .best-decision p:last-of-type {
            margin-bottom: 40px;
          }
        `
      }</style>
    </>
  )
}

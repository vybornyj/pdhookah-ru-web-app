import { FunctionComponent } from 'react'
import { ButtonFeedback } from 'src/components/common/buttons/ButonFeedback'

export const Catering2HookahCatering: FunctionComponent = () => {
  return (
    <>
      <section>
        <div>
          <div className='hookah-catering'>
            <h2>
              <span>Кальянный кейтеринг -</span>
              <br />
              уголок экзотического релакса
            </h2>
            <div>
              <div>
                <p>
                  Кальянный кейтеринг – одна из лучших составляющих успешной вечеринки: мальчишник, автерпати, свадьба, день рождения, корпоратив. В
                  каждой компании находятся любители кальяна.
                </p>

                <h3>
                  Раскуривание кальяна может стать <span> запоминающимся шоу!</span>
                </h3>
                <p>
                  А профессиональный кальянщик может рассказать все о кальянах, раскуривании, табаках и создать приятную дружественную атмосферу,
                  наполненную таинственным и ароматным дымом.
                </p>
                <p>Каждый гость получит незабываемые впечатления от красивой кальянной церемонии.</p>
                <p>Кальян уместен абсолютно на любом торжестве: деловые переговоры, свадьбы, корпоративы, юбилеи, банкеты и прочее.</p>
                <ButtonFeedback />
              </div>

              <div>
                <img src='/images/catering/hookah-cat-1.png' alt='' />

                <div className='arrows'>
                  <img src='/images/catering/arrow.png' alt='' />
                  <img src='/images/catering/arrow.png' alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{
        /* language=CSS */ `
          .hookah-catering > div {
            display: flex;
            justify-content: space-between;
          }

          .hookah-catering > div > div:nth-child(1) {
            width: 50%;
          }
          .hookah-catering > div > div > img {
            width: 470px;
            height: 516px;
          }

          .arrows img {
            margin-top: 30px;
          }
          .arrows img:nth-child(2) {
            margin-left: 40px;
            transform: rotate(180deg);
          }

          .hookah-catering h2 {
            font-family: var(--app-font-alt);

            font-size: 40px;
            line-height: 48px;
            text-transform: uppercase;
            margin-bottom: 50px;
          }

          .hookah-catering h2 > span {
            color: #198fe7;
          }

          .hookah-catering p {
            padding: 10px 20px 10px 0;
          }

          .hookah-catering p > span {
            color: #198fe7;
            font-weight: bold;
            text-decoration: underline;
          }

          .hookah-catering h3 {
            font-family: var(--app-font-alt);

            letter-spacing: 1px;
            text-transform: uppercase;
            margin: 50px 0 10px;
            font-size: 20px;
            line-height: 28px;
          }

          .hookah-catering h3 > span {
            background: var(--app-gradient-gold);
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
          }

          .hookah-catering p:last-of-type {
            margin-bottom: 40px;
          }
        `
      }</style>
    </>
  )
}

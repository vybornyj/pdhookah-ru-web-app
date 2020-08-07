export const OurBenifits = () => {
  return (
    <>
      <section>
        <div className='container'>
          <div className='our-benefits'>
            <h2>
              Наши <span>преимущества</span>
            </h2>
            <div>
              <img src='/assets/images/rent/benefits-photo.png' alt='' />
              <div>
                <img src='/assets/images/rent/01.png' alt='' />
                <h3>Забираем кальян с утра </h3>
                <p>
                  Вы наслаждаетесь кальяном весь вечер и сами назначаете время, в которое его отдаете утром. Мы помоем кальян сами, вам всего лишь
                  нужно слить из него воду и положить в коробку перед тем, как вернуть.
                </p>
              </div>
            </div>
            <div>
              <img src='/assets/images/rent/benefits-photo2.png' alt='' />
              <div>
                <img src='/assets/images/rent/02.png' alt='' />
                <h3>Аренда кальяна (Москва)</h3>
                <p>
                  Если вы отправляетесь на выездное мероприятие или кальян вам нужен более, чем на 1 день, Вы можете взять кальян в аренду, в этом
                  случае вам будет предоставлено необходимое количество кальянных наборов.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{
        /* language=CSS */ `
          .our-benefits {
            width: 1200px;
          }

          .our-benefits h2 {
            font-family: var(--app-font-alt);
            font-style: normal;
            font-weight: normal;
            font-size: 40px;
            line-height: 56px;

            text-transform: uppercase;
            margin-bottom: 80px;
          }

          .our-benefits h2 > span {
            background: linear-gradient(256.23deg, #ffbf50 -31.06%, #b67b16 115.79%);
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
          }

          .our-benefits > div {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .our-benefits > div:last-of-type {
            flex-direction: row-reverse;
          }
          .our-benefits > div > div {
            padding-left: 20px;
          }

          .our-benefits > div:last-of-type > div {
            padding-left: 0;
            padding-right: 20px;
          }
        `
      }</style>
    </>
  )
}

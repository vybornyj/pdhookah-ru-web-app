import { FunctionComponent } from 'react'

// const els = [{
//   src: '/images/rent/phone-icon.png',
//   h3: 'Оформить заказ',
//   p: 'Соберите свой кальян прямо на сайте или закажите по телефону'
// }]

export const Rent3: FunctionComponent = () => {
  return (
    <section>
      <h2>
        Заказать <span className='steelblue'>кальян на дом</span> просто
      </h2>

      <div className='list'>
        <div className='item'>
          <div className='circle'>
            <div>
              <img src='/images/rent/phone-icon.png' alt='' />
            </div>
          </div>
          <div>
            <h3>Оформить заказ</h3>
            <p>Соберите свой кальян прямо на сайте или закажите по телефону</p>
          </div>
        </div>

        <div className='item'>
          <div className='circle'>
            <div>
              <img src='/images/rent/hookah-icon.png' alt='' />
            </div>
          </div>
          <div>
            <h3>Подготовка кальяна</h3>
            <p>Специалист подготовит фруктовую чашу, табак с любым вкусом и доставит в назначенное время.</p>
          </div>
        </div>

        <div className='item'>
          <div className='circle'>
            <div>
              <img src='/images/rent/delivery-icon.png' alt='' />
            </div>
          </div>
          <div>
            <h3>Доставка</h3>
            <p>
              Вы получаете кальянный набор: кальян, готовый фрукт, плиту, угли, щипчики, мундштуки и инструкцию. При необходимости кальян будет собран
              и раскурен нашим специалистом.
            </p>
          </div>
        </div>

        <div className='item'>
          <div className='circle'>
            <div>
              <img src='/images/rent/take-icon.png' alt='' />
            </div>
          </div>
          <div>
            <h3>Забираем</h3>
            <p>Кальян забираем с утра (о времени договариваемся), можно не мыть, просто слейте воду и положите в коробку.</p>
          </div>
        </div>
      </div>

      <style jsx>{
        /* language=CSS */ `
          h2 {
            font-size: 40px;
            font-family: var(--app-font-alt);
          }

          .list {
            display: flex;
            flex-direction: column;
          }

          .item {
            display: flex;
            flex-direction: row;
            width: 100%;
            padding: 10px 0;
          }

          .circle {
            margin-right: 25px;
            display: inline-block;
            background: url(/images/rent/ellipse.png) no-repeat center;
            background-size: cover;
            width: 100px;
            height: 100px;
          }

          .circle > div {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 10px;
            border-radius: 50%;
            width: 80px;
            height: 80px;
            background: var(--app-gradient-gold);
          }

          img {
            max-width: 50px;
            max-height: 50px;
          }

          h3 {
            margin: 8px 0 0 0;
            color: hsl(38, 90%, 50%);
          }

          p {
            padding-right: 10px;
            font-size: 16px;
            line-height: 18px;
          }

          @media screen and (min-width: 1200px) {
            .list {
              flex-direction: row;
            }

            .item {
              flex-direction: column;
              max-width: 300px;
              padding: 10px;
            }

            .circle {
              margin-right: 0;
              width: 166px;
              height: 166px;
            }

            .circle > div {
              margin: 20px;
              width: 124px;
              height: 124px;
            }

            img {
              max-width: 80px;
              max-height: 80px;
            }

            h3 {
              margin: 16px 0 0 0;
            }
          }
        `
      }</style>
    </section>
  )
}

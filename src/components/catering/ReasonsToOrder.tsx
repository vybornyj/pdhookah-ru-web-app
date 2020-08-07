export const ReasonsToOrder = () => {
  return (
    <>
      <section className='reasons-to-order'>
        <div className='reasons-to-order-container'>
          <h2>
            <span>8 причин заказать</span>
            <br /> готовый кальян у нас:
          </h2>
          <div className='reasons-list'>
            <div>
              <div className='reasons-list-item'>
                <span className='twelve'>12</span>
                <p>
                  лет работы <br /> с кальянами
                </p>
              </div>
              <div className='reasons-list-item'>
                <span className='thousand'>1000+</span>
                <p>
                  Довольных <br /> клиентов
                </p>
              </div>
              <div className='reasons-list-item'>
                <span className='kinds'>12+</span>
                <p>
                  Видов табака <br /> для кальянов
                </p>
              </div>
            </div>
            <div>
              <div className='reasons-list-item'>
                <span className='five-ages'>5</span>
                <p>
                  Лет минимальный <br />
                  стаж работы кальянщиков
                </p>
              </div>
              <div className='reasons-list-item'>
                <span className='percents'>100%</span>
                <p>
                  Гарантия высшего качества <br /> продуктов табакокурения
                </p>
              </div>
            </div>
          </div>

          <div className='reasons-benefits'>
            <div>
              <img src='/assets/images/rent/tabacco.png' alt='' />
              <div>
                Работаем с топовыми табаками, которые можно покурить только в специализированных кальянных (их нет в свободной розничной продаже).
              </div>
            </div>
            <div>
              <img src='/assets/images/rent/clock.png' alt='' /> <div> Доставка занимает в среднем 90 мин.</div>
            </div>
            <div>
              <img src='/assets/images/rent/shield.png' alt='' /> <div> Повышенный клиентский сервис.</div>
            </div>
          </div>
        </div>
        <div>
          <img src='/assets/images/rent/eight-reasons.png' alt='' />
        </div>
      </section>
      <style jsx>{
        /* language=CSS */ `
          /* REASONS TO ORDER */

          h1,
          h2,
          h3,
          h4 {
            text-transform: uppercase;
          }

          .reasons-to-order h2 {
            font-size: 40px;
            line-height: 56px;
            font-family: var(--app-font-alt);
          }

          .reasons-to-order span {
            color: steelblue;
          }

          .reasons-to-order {
            width: 1200px;
            display: flex;
            justify-content: space-between;
            margin-bottom: 50px;
          }

          .reasons-to-order-container {
            margin: auto;
            width: 1200px;
          }

          .reasons-to-order > div:nth-child(2) img {
            position: absolute;
            left: 884px;
            top: 2868px;
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
            height: 56px;
            font-size: 46px;
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
        `
      }</style>
    </>
  )
}

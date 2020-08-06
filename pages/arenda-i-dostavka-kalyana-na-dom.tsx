import { NextPage } from 'next'
import Head from 'next/head'
import { BestDecision } from 'src/components/BestDecision'
import { Button1 } from 'src/components/Button1'
import { DoItYourself } from 'src/components/common/DoItYouself'
import { Footer } from 'src/components/common/Footer'
import { Information } from 'src/components/common/information'
import { TopLine } from 'src/components/common/TopLine'
import { MakeCallOrder } from 'src/components/MakeCallOrder'
import { OurBenifits } from 'src/components/OurBenefits'
import { RentalBlock2 } from 'src/components/RentalBlock2'
import { SocialLinks } from 'src/components/SocialLinks'

const Page: NextPage = () => (
  <div className='container'>
    <Head>
      <title>Аренда и доставка кальяна на дом</title>
    </Head>

    <header>
      <div className='header-wrapper'>
        <TopLine />

        <div className='hookah' />
        <div className='kubik' />
        <div className='effects1' />
        <div className='offer-wrapper'>
          <div className='offer'>
            <div className='offer-info'>
              <h3 className='offer-title-small'>Hookah services in Moscow</h3>
              <h2 className='offer-text-large'>
                Аренда и доставка <span>кальяна на дом</span>
              </h2>
              <h4>Готовые кальяны круглосуточно, с бесплатной доставкой в любую точку столицы</h4>
              <ul>
                <li>
                  95% доставок занимают <b>менее 90 мин.</b>
                </li>
                <li>Забираем кальян на следующий день.</li>
                <li>Большой парк кальянов.</li>
                <li>Все популярные табаки и топовые вкусы.</li>
              </ul>
            </div>
            <div className='offer-buttons'>
              <a href='#order'>
                <Button1>Заказать кальян</Button1>
              </a>
            </div>
          </div>
          <SocialLinks />
        </div>
        <div className='hookah' />
      </div>
    </header>

    <main id='order'>
      <RentalBlock2 />

      <section className='home-order'>
        <div className='home-order-container'>
          <h2>
            Заказать <span> кальян на дом</span> просто
          </h2>
          <div className='home-order-list'>
            <div className='home-order-list-item'>
              <div className='home-order-list-item-circle'>
                <div>
                  <img src='assets/images/rent/phone-icon.png' alt='' />
                </div>
              </div>
              <h3>Оформить заказ</h3>
              <p>Соберите свой кальян прямо на сайте или закажите по телефону</p>
            </div>
            <div className='home-order-list-item'>
              <div className='home-order-list-item-circle'>
                <div>
                  <img src='assets/images/rent/hookah-icon.png' alt='' />
                </div>
              </div>
              <h3>Подготовка кальяна</h3>
              <p>Специалист подготовит фруктовую чашу, табак с любым вкусом и доставит в назначенное время.</p>
            </div>
            <div className='home-order-list-item'>
              <div className='home-order-list-item-circle'>
                <div>
                  <img src='assets/images/rent/delivery-icon.png' alt='' />
                </div>
              </div>
              <h3>Доставка</h3>
              <p>
                Вы получаете кальянный набор: кальян, готовый фрукт, плиту, угли, щипчики, мундштуки и инструкцию. При необходимости кальян будет
                собран и раскурен нашим специалистом.
              </p>
            </div>
            <div className='home-order-list-item'>
              <div className='home-order-list-item-circle'>
                <div>
                  <img src='assets/images/rent/take-icon.png' alt='' />
                </div>
              </div>
              <h3>Забираем</h3>
              <p>Кальян забираем с утра (о времени договариваемся), можно не мыть, просто слейте воду и положите в коробку.</p>
            </div>
          </div>
        </div>
      </section>

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
      </section>

      <MakeCallOrder />

      <BestDecision />

      <OurBenifits />
      <DoItYourself />

      <Information />
    </main>
    <Footer />

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
          font-family: 'Nickelodeon 2001 Headline', sans-serif;
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
          font-family: 'Nickelodeon 2001 Headline', serif;
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
          font-family: 'Nickelodeon 2001 Headline', serif;
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
          font-family: Noto Sans, serif;
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
          font-family: 'Nickelodeon 2001 Headline', serif;
          font-style: normal;
          font-weight: normal;
          font-size: 24px;
          line-height: 34px;
          text-transform: uppercase;
          margin-bottom: 20px;
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
  </div>
)

export default Page

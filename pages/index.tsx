import Head from 'next/head'
import { Footer } from 'src/components/common/Footer'

const Home = () => (
  <div className='container'>
    <Head>
      <title>Кальяны МСК</title>
    </Head>

    <header>
      <div className='header-wrapper'>
        <div className='top-line'>
          <div className='logo'>
            <a href='/'>
              <img src='/logo.png' alt='logo.png' />
            </a>
            <div className='logo-text'>
              Кальянный кейтеринг. <br />
              Заказ и аренда кальянов.
            </div>
          </div>
          <div className='phone'>
            <div className='phone-number'>
              <a href='tel:+79255554466'>+ 7 (925) 355-00-53</a>
            </div>
            <div className='phone-callback'>
              <a href='#'>Заказать обратный звонок</a>
            </div>
          </div>
        </div>

        <div className='offer-wrapper'>
          <div className='offer'>
            <div className='offer-info'>
              <h3 className='offer-title-small'>Hookah services in Moscow</h3>
              <h2 className='offer-text-large'>
                Создайте <span>свою атмосферу</span> с нашими кальянами.
              </h2>
              <p>
                Мы организуем доставку кальянов на важное для вас событие: свидание, корпоратив, вечеринку, день рождения, свадьбу, пикник и не
                только. Попробуйте наши кальяны, которые отличаются вкусовыми качествами, разнообразие вкусов позволяет удовлетворить любые ваши
                желания.
              </p>
            </div>
            <div className='offer-buttons'>
              <div className='rental'>Аренда и заказ на дом</div>
              <div className='catering'>Кальянный кейтеринг</div>
            </div>
          </div>
          <div className='social-links'>
            <div>
              <img src='/vkontakte.png' alt='' />
              <span>Вконтакте </span>
            </div>
            <div>
              <img src='/instagram.png' alt='' />
              <span>Instagram </span>
            </div>
            <div>
              <img src='/facebook.png' alt='' />
              <span>Facebook</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section className='information'>
        <div>
          <p>
            Можно приобрести кальян, пару чашек, найти неплохой табак, выбрать место в доме, где все это будет храниться. А еще — купить жаровню для
            углей, самостоятельно забивать чашу, а после наслаждения дымным коктейлем — все это мыть и убирать. А можно заказать доставку кальяна на
            дом в профессиональной компании, которая больше 12 лет занимается кальянами и знает все о правильной подготовке. Это быстро, практично и,
            главное, удобно!
          </p>
          <h2>Кальяны на дом</h2>
          <p>
            Кальян — это приятный способ насладиться ароматным дымом без вредных смол. Профессиональное сопровождение — отличное решение для тех, кто
            затеял масштабную вечеринку и не хочет работать весь вечер бесплатным кальянщиком, подогревая угли и проверяя тягу кальянов у гостей.
            Именно поэтому услуга с доставкой готового кальяна пользуется такой огромной популярностью. Сюда входит:
          </p>
          <ul>
            <li>профессиональное сопровождение вечера;</li>
            <li>доставка всего необходимого;</li>
            <li>чаши на выбор: от глиняной классики до экзотических фруктов;</li>
            <li>большой выбор топовых табаков и миксов.</li>
          </ul>
          <p>
            Компания Your Hookah предлагает круглосуточную доставку кальянов на дом. Специально для вас мы работаем в режиме 24 часа, 7 дней в неделю:
            просто сделайте заказ через наш официальный сайт — и мы привезем готовый кальян в течение 90 минут. Заказать доставку можно и через
            удобные вам соцсети или просто позвонив нам по указанному номеру телефона.
          </p>
          <h2>Наши преимущества</h2>
          <p>
            Сервис доставки и аренды кальянов Your Hookah имеет огромный опыт в этой сфере. Мы знаем, как создать уникальный микс и подобрать
            сочетание табаков под вкус клиента. Обращаясь к нам, вы получите:
          </p>
          <ul>
            <li>большой выбор топовых табаков, которых нельзя приобрести в розницу;</li>
            <li>выезд кальянщика с баром на дом;</li>
            <li>быструю доставку готовых кальянов;</li>
            <li>полное обслуживание вечера: сами привезем, подготовим, обслужим и увезем кальяны;</li>
            <li>приятный выбор экзотических чаш;</li>
            <li>большой выбор наполнения: к воде добавим колу, фреши или другой напиток.</li>
          </ul>
          <p>
            Заказать кальян на дом можно и без сопровождения. В этом случае наш мастер просто привезет все необходимое, забьет и раскурит кальян,
            после чего уедет. Это идеальное решение для приватной вечеринки или романтического вечера: посторонний человек не будет вас смущать своим
            присутствием. На следующий день кальян заберут в удобное для вас время. Причем мыть его не нужно: просто вылейте воду из колбы и уложите
            кальян в коробку. Все остальное мы сделаем самостоятельно.
          </p>
          <h2>Как заказать услугу</h2>
          <p>
            Чтобы заказать кальян на дом в Москве, просто воспользуйтесь нашим сайтом: составьте свой идеальный кальян и переходите к оформлению
            заказа. Если вы не знаете, что выбрать, свяжитесь с нашими менеджерами по указанному номеру телефона. Уточнить наличие табаков и варианты
            наполнения колбы также можно по телефону. Если звонить неудобно, напишите нам в любой из соцсетей: мы всегда на связи и ответим вам в
            максимально сжатые сроки! А если вам нужен кальянный кейтеринг на крупное мероприятие, обратитесь к нам заранее, мы подготовим все
            необходимое для организации кальянной зоны под ключ.
          </p>
        </div>
        <div className='payments'>
          <img src='/visa.png' alt='' />
          <img src='/mastercard.png' alt='' />
          <img src='/yandexmoney.png' alt='' />
        </div>
      </section>
    </main>

    <Footer />

    <style jsx>{
      /* language=CSS */ `
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
        }

        h1,
        h2,
        h3,
        h4 {
          text-transform: uppercase;
        }

        header {
          background: #606f86;
          width: 100%;
        }

        .header-wrapper {
          margin: auto;
          width: 1200px;
        }

        .top-line {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          flex-wrap: wrap;
          margin: 20px;
          text-align: center;
        }

        .logo {
        }

        .logo-text {
          margin-top: 15px;
          font-size: 13px;
          line-height: 15px;
        }

        .phone-number {
          margin-top: 20px;
          font-weight: bold;
          font-size: 28px;
        }

        .phone-callback {
          text-decoration: underline;
        }

        .offer-wrapper {
          position: relative;
          width: 1200px;
          margin-bottom: 200px;
        }

        .offer {
          padding: 5px 20px;
        }

        .offer-info > h3 {
          font-size: 22px;
          font-weight: normal;
        }

        .offer-info > p {
          width: 500px;
          padding: 0;
          font-size: 14px;
        }

        .offer-text-large {
          text-transform: uppercase;
          font-size: 70px;
          line-height: 86px;
          margin: 0 0 26px;
          width: 900px;
        }

        .offer-text-large > span {
          color: steelblue;
        }

        .offer-buttons {
          margin-top: 100px;
        }

        .offer-buttons > div {
          text-transform: uppercase;
          display: inline-block;
          line-height: 70px;
          /*border: 2px solid goldenrod;*/
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
          border-radius: 10px;
          margin-right: 40px;
          width: 335px;
          text-align: center;
          font-size: 18px;
          letter-spacing: 1px;
        }

        .rental {
          background: linear-gradient(90deg, #125b90, #3795dd);
          background: -moz-linear-gradient(#125b90, #3795dd);
        }

        .catering {
          background: linear-gradient(90deg, #bf841e, #ebad40);
          background: -moz-linear-gradient(#bf841e, #ebad40);
        }

        .social-links {
          position: absolute;
          top: 55px;
          left: -125px;
          text-transform: uppercase;
          font-size: 20px;
        }

        .social-links > div {
          height: 120px;
          transform: rotate(-90deg);
          margin-bottom: 90px;
        }

        .social-links > div > img {
          transform: rotate(90deg);
        }

        .social-links > div > span {
          margin-left: 20px;
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

        section {
          margin: auto;
          width: 1200px;
        }

        main > section.information {
          margin-top: 80px;
          margin-bottom: 200px;
          padding: 5px 20px;
        }

        main > section.information h2 {
          color: goldenrod;
          font-size: 24px;
          margin-bottom: 0;
        }

        .payments {
          margin: 40px 0;
        }

        .payments img {
          margin-right: 50px;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `
    }</style>

    <style jsx global>{
      /* language=CSS */ `
        html,
        body {
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
      `
    }</style>
  </div>
)

export default Home

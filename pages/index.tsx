import Head from 'next/head'

const pangram = () => (
  <p>
    Съешь ещё этих мягких французских булок, да выпей чаю. Съешь ещё этих мягких французских булок, да выпей чаю. Съешь ещё этих мягких французских
    булок, да выпей чаю. Съешь ещё этих мягких французских булок, да выпей чаю.
  </p>
)

const Home = () => (
  <div className='container'>
    <Head>
      <title>Кальяны МСК</title>
    </Head>

    <header>
      <div className='header-wrapper'>
        <div className='top-line'>
          <div className='logo'>
            <a href='/'>{/* <img deus-date-src='/images/logo.png' alt='logo.png' /> */}</a>
          </div>
          <div className='logo-text'>
            <a href='/'>
              {/* <img deus-date-src='/images/logo-text.png' alt='logo-text.png' /> */}
              <div>Кальянный кейтеринг.</div>
              <div>Заказ и аренда кальянов.</div>
            </a>
          </div>
          <div className='phone'>
            <div className='phone-number'>
              <span>+7 (925) 555-44-66</span>
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
              <h2 className='offer-text-large'>Создайте свою атмосферу с нашими кальянами.</h2>
              {pangram()}
            </div>
            <div className='offer-buttons'>
              <div>Аренда и заказ на дом</div>
              <div>Кальянный кейтеринг</div>
            </div>
          </div>
          <div className='social-links'>
            <div>
              <span> Вконтакте </span>
            </div>
            <div>
              <span> Instagram </span>
            </div>
            <div>
              <span> Facebook </span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section>
        <div>
          {pangram()}
          <h3>Кальяны на дом</h3>
          {pangram()}
          {pangram()}
          <ul>
            <li>профессиональное сопровождение вечера</li>
            <li>доставка всего необходимого</li>
            <li>чаши на выбор от глиняных до экзотических фруктов</li>
            <li>большой выбор топовых табаков и миксов</li>
          </ul>
          {pangram()}
          <h3>Наши преимущества</h3>
          {pangram()}
          <h3>Кальяны на дом</h3>
          {pangram()}
          {pangram()}
          <ul>
            <li>профессиональное сопровождение вечера</li>
            <li>доставка всего необходимого</li>
            <li>чаши на выбор от глиняных до экзотических фруктов</li>
            <li>большой выбор топовых табаков и миксов</li>
          </ul>

          {pangram()}
          <h3>Кальяны на дом</h3>
          {pangram()}
          {pangram()}
        </div>
      </section>
    </main>

    <footer>
      <div>(c) 2020</div>
    </footer>

    <style jsx>{
      /* language=CSS */ `
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          margin: auto;
          width: 1200px;
        }

        header-wrapper > h1,
        h2,
        h3,
        h4 {
          text-transform: uppercase;
        }

        header-wrapper {
        }

        .top-line {
          display: flex;
        }

        .logo {
          flex: 1;
        }

        .logo-text {
          flex: 3;
        }

        .phone {
          flex: 1;
        }

        .offer-wrapper {
          position: relative;
        }

        .offer {
          margin-left: 280px;
        }

        .offer-title-small {
          text-transform: uppercase;
        }

        .offer-text-large {
          text-transform: uppercase;
          font-size: 70px;
          line-height: 86px;
          margin: 0 0 26px;
        }

        .offer-info {
          margin-top: 100px;
        }

        .offer-buttons > div {
          text-transform: uppercase;
          display: inline-block;
          line-height: 64px;
          border: 2px solid goldenrod;
          border-radius: 35px;
          margin-right: 20px;
          width: 270px;
          text-align: center;
          font-size: 14px;
        }

        .social-links {
          position: absolute;
          top: 15px;
          left: 15px;
        }

        .social-links > div {
          transform: rotate(-90deg);
          margin-bottom: 90px;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          margin-left: 280px;
        }

        main > section h3 {
          color: goldenrod;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
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

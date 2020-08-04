import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Footer } from 'src/components/common/Footer'
import { SvgLogo } from 'src/components/common/SvgLogo'
import { TempPangram } from 'src/components/TempPangram'

const Page: NextPage = () => (
  <div className='container'>
    <Head>
      <title>Кальянный кейтеринг в Москве</title>
    </Head>

    <header>
      <div className='header-wrapper'>
        <div className='top-line'>
          <div className='logo'>
            {' '}
            <Link href='/'>
              <a>
                <SvgLogo />
              </a>
            </Link>
          </div>
          <div className='logo-text'>
            <a href='/'>
              {/* <img src='/images/logo-text.png' alt='logo-text.png' /> */}
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
              <TempPangram />
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
          <TempPangram />
          <h3>Кальяны на дом</h3>
          <TempPangram />
          <TempPangram />
          <ul>
            <li>профессиональное сопровождение вечера</li>
            <li>доставка всего необходимого</li>
            <li>чаши на выбор от глиняных до экзотических фруктов</li>
            <li>большой выбор топовых табаков и миксов</li>
          </ul>
          <TempPangram />
          <h3>Наши преимущества</h3>
          <TempPangram />
          <h3>Кальяны на дом</h3>
          <TempPangram />
          <TempPangram />
          <ul>
            <li>профессиональное сопровождение вечера</li>
            <li>доставка всего необходимого</li>
            <li>чаши на выбор от глиняных до экзотических фруктов</li>
            <li>большой выбор топовых табаков и миксов</li>
          </ul>

          <TempPangram />
          <h3>Кальяны на дом</h3>
          <TempPangram />
          <TempPangram />
        </div>
      </section>
    </main>

    <Footer />

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

        h1,
        h2,
        h3,
        h4 {
          text-transform: uppercase;
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

        .phone-number > a {
          font-weight: bold;
          font-size: 30px;
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
  </div>
)

export default Page

import { NextPage } from 'next'
import Head from 'next/head'
import { Button1 } from 'src/components/Button1'
import { Footer } from 'src/components/common/Footer'
import { Information } from 'src/components/common/information'
import { TopLine } from 'src/components/common/TopLine'
import { SocialLinks } from 'src/components/SocialLinks'

const Page: NextPage = () => (
  <div className='container'>
    <Head>
      <title>Кальянный кейтеринг в Москве</title>
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
                Кальянный кейтеринг <br /> <span> в москве.</span>
              </h2>
              <p>
                Мы организуем доставку кальянов на важное для вас событие: свидание, корпоратив, вечеринку, день рождения, свадьбу, пикник и не
                только. Попробуйте наши кальяны, которые отличаются вкусовыми качествами, разнообразие вкусов позволяет удовлетворить любые ваши
                желания.
              </p>
            </div>
            <div className='offer-buttons'>
              <a href='#'>
                <Button1>Заказать кальян</Button1>
              </a>
            </div>
          </div>
          <SocialLinks />
        </div>

        <div className='hookah' />
      </div>
    </header>

    <main>
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
          background: url('/assets/images/catering/hookah.png');
          position: absolute;
          width: 443.06px;
          height: 754.72px;
          left: 1256.5px;
          top: 174px;
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

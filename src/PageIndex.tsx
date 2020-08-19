import Link from 'next/link'
import { FunctionComponent } from 'react'
import { Button1 } from 'src/components/Button1'
import { Footer } from 'src/components/common/Footer'
import { Information } from 'src/components/common/information'
import { TopLine } from 'src/components/common/TopLine'
import { SocialLinks } from 'src/components/SocialLinks'
import { Template } from 'src/components/template/Template'

export const PageIndex: FunctionComponent = () => (
  <Template>
    <div className='container'>
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
                  Создайте <span>свою атмосферу</span> с нашими кальянами.
                </h2>
                <p>
                  Мы организуем доставку кальянов на важное для вас событие: свидание, корпоратив, вечеринку, день рождения, свадьбу, пикник и не
                  только. Попробуйте наши кальяны, которые отличаются вкусовыми качествами, разнообразие вкусов позволяет удовлетворить любые ваши
                  желания.
                </p>
              </div>
              <div className='offer-buttons'>
                <Link href='/arenda-i-dostavka-kalyana-na-dom'>
                  <a>
                    <Button1>Аренда и заказ на дом</Button1>
                  </a>
                </Link>
                <Link href='/kalyannyj-kejtering-v-moskve'>
                  <a>
                    <Button1 variant='yellow'>Кальянный кейтеринг</Button1>
                  </a>
                </Link>
              </div>
            </div>
            <SocialLinks />
          </div>
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

          .header-wrapper {
            margin: auto;
            width: 1200px;
            opacity: 1;
          }

          .hookah {
            background: url('/assets/images/main/hookah.png');
            position: absolute;
            width: 703px;
            height: 703px;
            left: 1150px;
            top: 115px;
          }

          section {
            margin: auto;
            width: 1200px;
          }

          main > section.information {
            margin-top: 50px;
            margin-bottom: 200px;
            padding: 5px 20px;
          }

          main > section.information p {
            font-size: 16px;
            line-height: 25px;
          }

          main > section.information h2 {
            color: goldenrod;
            font-size: 24px;
            margin-bottom: 0;
          }

          main > section.information ul {
            list-style-image: url('/assets/images/main/bullet.png');
            padding-left: 20px;
            margin: 10px 0;
          }

          main > section.information li {
            margin: 10px 0;
          }

          .payments {
            margin: 40px 0;
          }

          .payments img {
            margin-right: 50px;
          }
        `
      }</style>
    </div>
  </Template>
)

export default PageIndex

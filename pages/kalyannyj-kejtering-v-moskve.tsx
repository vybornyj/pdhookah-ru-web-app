import { NextPage } from 'next'
import { Button1 } from 'src/components/Button1'
import { AreaDecoration } from 'src/components/catering/AreaDecoration'
import { CateringOrder } from 'src/components/catering/CateringOrder'
import { EventCalculate } from 'src/components/catering/EventCalculate'
import { EventOrganize } from 'src/components/catering/EventOrganize'
import { HookahCatering } from 'src/components/catering/HookahCatering'
import { Footer } from 'src/components/common/Footer'
import { Information } from 'src/components/common/information'
import { TopLine } from 'src/components/common/TopLine'
import { DeliveryHookahs } from 'src/components/DeliveryHookahs'
import { BenefitsWork } from 'src/components/rent/BenifitsWork'
import { SocialLinks } from 'src/components/SocialLinks'
import { Template } from 'src/components/template/Template'

const Page: NextPage = () => (
  <Template title='Кальянный кейтеринг в Москве'>
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
                  Кальянный кейтеринг <br /> <span> в москве.</span>
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
                <a href='#event-calculate'>
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
        <HookahCatering />

        <EventCalculate />

        <CateringOrder />

        <EventOrganize />

        <AreaDecoration />

        <BenefitsWork />
        <DeliveryHookahs />

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
  </Template>
)

export default Page

import Link from 'next/link'
import { FunctionComponent, useEffect, useState } from 'react'
import { AppButton } from 'src/components/common/buttons/AppButton'
import { TemplateHeaderSocialLinks } from 'src/components/template/TemplateHeaderSocialLinks'
import { TemplateHeaderTopLine } from 'src/components/template/TemplateHeaderTopLine'

interface Props {
  type?: 'rent' | 'catering'
}

export const TemplateHeader: FunctionComponent<Props> = ({ type = 'index' }) => {
  const [runEffect, setRunEffect] = useState(false)

  useEffect(() => {
    setTimeout(() => setRunEffect(true), 200)
  }, [])

  const h2 =
    type === 'index' ? (
      <>
        Создайте <span className='steelblue'>свою атмосферу</span> с нашими кальянами
      </>
    ) : type === 'rent' ? (
      <>
        Аренда и доставка <span className='steelblue'>кальяна на дом</span>
      </>
    ) : (
      <>
        Кальянный кейтеринг <br />
        <span className='steelblue'> в москве.</span>
      </>
    )

  return (
    <div className={`background ${runEffect ? 'runEffect' : ''}`}>
      <section className='template-header'>
        <TemplateHeaderTopLine />

        <img className={type} src={`/images/header/hookah-${type}.png`} alt='' />
        <div className='kubik' />
        <div className='effects1' />

        <div className='offer-wrapper'>
          <div className='offer'>
            <div>
              <h3>Hookah services in Moscow</h3>
              <h2>{h2}</h2>

              {type === 'index' ? (
                <p>
                  Мы организуем доставку кальянов на важное для вас событие: свидание, корпоратив, вечеринку, день рождения, свадьбу, пикник и не
                  только. Попробуйте наши кальяны, которые отличаются вкусовыми качествами, разнообразие вкусов позволяет удовлетворить любые ваши
                  желания.
                </p>
              ) : type === 'rent' ? (
                <>
                  <h4>Готовые кальяны круглосуточно, с бесплатной доставкой в любую точку столицы</h4>
                  <ul>
                    <li>
                      95% доставок занимают <b>менее 90 мин</b>
                    </li>
                    <li>Забираем кальян на следующий день</li>
                    <li>Большой парк кальянов</li>
                    <li>Все популярные табаки и топовые вкусы</li>
                  </ul>
                </>
              ) : (
                <>
                  <h4>Создайте свою атмосферу с нашими кальянами</h4>
                  <ul>
                    <li>Выездное обслуживание мероприятий любого масштаба</li>
                    <li>Индивидуальный подход к каждому клиенту </li>
                    <li>
                      <b>Большой парк</b> кальянов
                    </li>
                    <li>
                      <b>Все популярные табаки</b> и топовые вкусы
                    </li>
                  </ul>
                </>
              )}
            </div>
            <div className='buttons'>
              {type === 'index' ? (
                <>
                  <Link href='/arenda-i-dostavka-kalyana-na-dom'>
                    <a>
                      <AppButton>Аренда и заказ на дом</AppButton>
                    </a>
                  </Link>
                  <Link href='/kalyannyj-kejtering-v-moskve'>
                    <a>
                      <AppButton variant='yellow'>Кальянный кейтеринг</AppButton>
                    </a>
                  </Link>
                </>
              ) : (
                <Link href='#anchor'>
                  <a>
                    <AppButton>Заказать кальян</AppButton>
                  </a>
                </Link>
              )}
            </div>
          </div>
          <TemplateHeaderSocialLinks />
        </div>
      </section>

      <style jsx>{
        /* language=CSS */ `
          section.template-header {
            margin-top: 0;
            padding-bottom: 1px;
          }

          .background {
            background: url(/images/main/layer1.png) no-repeat;
            background-size: cover;
            width: 100%;
          }

          img {
            display: none;
          }

          h2 {
            text-transform: uppercase;
            font-size: 36px;
            line-height: 50px;
            margin: 0 0 40px;

            font-weight: bold;
            font-family: var(--app-font-alt);
          }

          h3 {
            font-weight: normal;
            font-size: 20px;
            line-height: 33px;
          }

          p {
            font-weight: normal;
            font-size: 16px;
            line-height: 30px;
          }

          ul {
            display: inline-flex;
            flex-direction: column;
            padding: 0;
            margin: 10px 0;
            list-style: none;
          }

          li {
            margin: 10px 0;
            background: url(/images/main/bullet.png) no-repeat left center;
            padding: 0 0 0 32px;
          }

          .offer-wrapper {
            position: relative;
            margin-bottom: 30px;
            margin-top: 38px;
          }

          .buttons {
            margin-top: 80px;
            flex-direction: column;
            display: flex;
            align-items: center;
          }

          .buttons > a {
            margin-right: 40px;
          }

          .kubik {
            position: absolute;
            left: -100px;
            width: 179px;
            height: 176px;
            top: 75px;
            background: url(/images/kubik-main.png) center;
            transform: matrix(-0.81, -0.59, -0.59, 0.81, 0, 0);
          }

          .effects1 {
            z-index: -1;
            background: url(/images/isky.png);
            position: absolute;
            width: 1435px;
            height: 959px;
            left: -823px;
            top: -104px;
            filter: blur(10px);
          }

          @media screen and (min-width: 768px) {
            h2 {
              font-size: 48px;
              line-height: 62px;
            }

            h3 {
              font-size: 22px;
            }

            .buttons {
              flex-direction: row;
            }
          }

          @media screen and (min-width: 1024px) {
            h2 {
              font-size: 60px;
              line-height: 75px;
            }

            h3 {
              font-size: 24px;
            }

            p {
              max-width: 50%;
            }

            img {
              height: 0;
              display: initial;
              position: absolute;
              width: auto;
              right: calc(0px - 30vh);
              top: 2vh;
              transition: 0.75s all cubic-bezier(0.18, 0.89, 0.32, 1.28);
              opacity: 0;
            }

            .runEffect img {
              height: 92%;
              opacity: 1;
            }

            img.rent {
              right: calc(0px - 27vh);
            }

            img.catering {
              right: calc(0px - 20vh);
            }
          }
        `
      }</style>
    </div>
  )
}

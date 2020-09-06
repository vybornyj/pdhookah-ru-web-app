import getConfig from 'next/config'
import React, { FunctionComponent, useState } from 'react'
import { AppButton } from 'src/components/common/buttons/AppButton'
import { AppModal } from 'src/components/common/modals/AppModal'
import { FixedCartButton } from 'src/components/pages-blocks-rent/rent2/FixedCartButton'
import { ModalCart } from 'src/components/pages-blocks-rent/rent2/ModalCart'
import { RentalBlock2Mode } from 'src/components/pages-blocks-rent/rent2/RentalBlock2Mode'
import { RentalBlock2Variants } from 'src/components/pages-blocks-rent/rent2/RentalBlock2Variants'
import { useDidUpdate } from 'src/scripts/useDidUpdate'
import { useStore } from 'src/scripts/useStore'

const {
  publicRuntimeConfig: { PHONE_VIEW }
} = getConfig()

export const Rent2: FunctionComponent = () => {
  const storeCartPrice = useStore((state) => state.storeCartPrice)
  const [mode, setMode] = useState<rentalMode>('hookah')
  const [nextMode, setNextMode] = useState<rentalMode>('hookah')
  const [timeoutID, setTimeoutID] = useState(0)
  const [visible, setVisible] = useState(true)

  const [isCartOpen, setIsCartOpen] = useState(false)

  useDidUpdate(() => {
    if (timeoutID) clearTimeout(timeoutID)

    setVisible(false)

    let newTimeoutID = setTimeout(() => {
      setVisible(true)
      setMode(nextMode)
    }, 250)
    setTimeoutID(Number(newTimeoutID))
  }, [nextMode])

  return (
    <>
      <section id='anchor'>
        <AppModal isOpen={isCartOpen} closing={() => setIsCartOpen(false)}>
          <ModalCart />
        </AppModal>
        <FixedCartButton isOpen={isCartOpen} onClick={() => setIsCartOpen(true)} />
        <img className='absolute-hookah' src='/images/rent/hookah-1-big.png' alt='' />

        <div className='right'>
          <div className='configure-hookah'>
            <h2>
              Собери <span>свой кальян:</span>
            </h2>

            <RentalBlock2Mode mode={mode} setMode={setNextMode} />

            <RentalBlock2Variants mode={mode} visible={visible} />

            <div className='order-info'>
              <h3>ПРИ ЗАКАЗЕ КАЛЬЯНА ВЫ ПОЛУЧАЕТЕ КАЛЬЯННЫЙ НАБОР:</h3>
              <div className='hookah-kit'>
                <div className='hookah-kit-col'>
                  <div>
                    <div className='item-img-wrap'>
                      <img src='/images/rent/item-kolian.png' alt='' />
                    </div>
                    <div> Кальян</div>
                  </div>
                  <div>
                    <div className='item-img-wrap'>
                      <img src='/images/rent/item-plitka.png' alt='' />
                    </div>
                    <div> Плитка для углей</div>
                  </div>
                  <div>
                    <div className='item-img-wrap'>
                      <img src='/images/rent/item-mundshtuk.png' alt='' />
                    </div>
                    <div> Одноразовые мундштуки</div>
                  </div>
                  <div>
                    <div className='item-img-wrap'>
                      <img src='/images/rent/item-tabak.png' alt='' />
                    </div>
                    <div> Табак</div>
                  </div>
                </div>
                <div className='hookah-kit-col'>
                  <div>
                    <div className='item-img-wrap'>
                      <img src='/images/rent/item-shipcy.png' alt='' />
                    </div>
                    <div> Щипчики</div>
                  </div>
                  <div>
                    <div className='item-img-wrap'>
                      <img src='/images/rent/item-ugli.png' alt='' />
                    </div>
                    <div> Угли</div>
                  </div>
                  <div>
                    <div className='item-img-wrap'>
                      <img src='/images/rent/item-chasha.png' alt='' />
                    </div>
                    <div> Чаша</div>
                  </div>
                  <div>
                    <div className='item-img-wrap'>
                      <img src='/images/rent/item-zhidkost.png' alt='' />
                    </div>
                    <div>
                      Жидкость на выбор: <br /> молоко, алкоголь коктейль...
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='make-call-order'>
              <div>
                <h3>НЕ МОЖЕТЕ ВЫБРАТЬ?</h3>
                <p>
                  Просто позвоните нам, и мы соберем <br /> для вас кальян!
                </p>
                <div className='make-call-order-phone'>
                  <img src='/images/rent/phone-call.png' alt='' />
                  {PHONE_VIEW}
                </div>
              </div>
              <div className='order-result'>
                <div className='order-container'>
                  <div>
                    <span>Заказ на сумму:</span>
                    <span className='price'>{storeCartPrice} руб</span>
                  </div>
                  <AppButton onClick={() => setIsCartOpen(true)}>Открыть корзину</AppButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{
        /* language=CSS */ `
          .absolute-hookah {
            display: none;
          }

          @media screen and (min-width: 1200px) {
            .absolute-hookah {
              display: initial;
              position: absolute;
              width: auto;
              left: calc(0px - 30vh);
              top: 2vh;
              transition: 0.75s all cubic-bezier(0.18, 0.89, 0.32, 1.28);
            }
          }

          .right {
            width: 100%;
          }

          @media screen and (min-width: 1200px) {
            .right {
              margin-left: 300px;
              width: 900px;
            }
          }

          h2,
          h3 {
            text-transform: uppercase;
            font-family: var(--app-font-alt);
          }

          h2 {
            font-weight: bold;
            font-size: 40px;
            margin-top: 0;
          }

          h2 > span {
            color: steelblue;
          }

          .configure-hookah {
            padding: 0 15px;
          }

          @media screen and (min-width: 1200px) {
            .configure-hookah {
              padding: 0 50px;
            }
          }

          .hookah-kit {
            display: flex;
          }

          /*.hookah-kit-col:nth-child(1) {*/
          /*  margin-right: 50px;*/
          /*}*/

          .hookah-kit-col > div {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
          }

          .item-img-wrap {
            width: 47px;
            height: 47px;
            background: var(--app-gradient-gold);
            box-shadow: 0 4px 9px rgba(0, 0, 0, 0.82);
            text-align: center;
            border-radius: 24px;
            line-height: 44px;
            margin-right: 15px;
          }

          .hookah-kit-col > div > img {
            margin-right: 10px;
          }

          .hookah-kit > div {
            display: flex;
            flex-direction: column;
            width: 50%;
          }

          .hookah-kit > div > div {
            padding: 10px 0;
          }

          .order-info {
            margin-top: 30px;
          }

          .make-call-order {
            display: flex;
            flex-direction: column-reverse;
          }

          @media screen and (min-width: 1200px) {
            .make-call-order {
              flex-direction: row;
            }
          }

          .make-call-order > div {
            width: 100%;
            margin-top: 50px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          @media screen and (min-width: 1200px) {
            .make-call-order > div:nth-child(1) {
              border-right: 1px white solid;
              align-items: initial;
            }
          }

          .make-call-order h3 {
            font-size: 26px;
            margin: 0;
          }

          .make-call-order p {
            font-size: 18px;
          }

          .make-call-order-phone {
            font-family: var(--app-font-alt);

            font-size: 36px;
            line-height: 51px;
          }

          .make-call-order-phone > img {
            width: 36px;
            margin-right: 14px;
          }

          .order-result {
            display: flex;
            align-items: center;
          }

          .order-container {
          }

          .order-container > div:nth-child(1) {
            display: flex;
            align-items: center;
            text-align: center;
            padding: 0 0 20px 0;
            justify-content: center;
          }

          .order-container .price {
            margin-left: 20px;
            font-weight: bold;
            font-size: 24px;
            font-family: var(--app-font-alt);
          }

          .open-cart {
            width: 300px;
            margin-top: 20px;
          }
        `
      }</style>
    </>
  )
}

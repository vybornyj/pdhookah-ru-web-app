import React, { FunctionComponent, useEffect, useState } from 'react'
import { Button1 } from 'src/components/Button1'
import { AppModal } from 'src/components/common/modals/AppModal'
import { FixedCartButton } from 'src/components/rental-block-2/FixedCartButton'
import { ModalCart } from 'src/components/rental-block-2/ModalCart'
import { RentalBlock2Mode } from 'src/components/rental-block-2/RentalBlock2Mode'
import { RentalBlock2Variants } from 'src/components/rental-block-2/RentalBlock2Variants'
import { rentalCartContent } from 'src/data/rentalCartContent'
import { useDidUpdate } from 'src/scripts/hooks/useDidUpdate'

export const RentalBlock2: FunctionComponent = () => {
  const [mode, setMode] = useState<rentalMode>('hookah')
  const [nextMode, setNextMode] = useState<rentalMode>('hookah')
  const [timeoutID, setTimeoutID] = useState(0)
  const [visible, setVisible] = useState(true)

  const [cart, setCart] = useState<{ [name: string]: number }>({})
  const [totalPrice, setTotalPrice] = useState(0)
  const [cartIsOpen, setCartIsOpen] = useState(false)

  const addToCart = (mode: string, key: number | string, action: 'add' | 'remove' | 'clear' = 'add') => {
    const id = [mode, key].join('--')
    let newCart = { ...cart }
    if (action === 'add') newCart[id] = cart[id] ? cart[id] + 1 : 1
    if (action === 'remove') newCart[id] = cart[id] - 1
    if (action === 'clear') newCart[id] = 0
    if (newCart[id] === 0) delete newCart[id]
    setCart(newCart)
  }

  useEffect(() => {
    let newPrice = 0
    const objectKeys = Object.keys(cart)
    objectKeys.map(objectKey => {
      const [mode, key] = objectKey.split('--')
      newPrice += rentalCartContent[mode][Number(key)].price * cart[objectKey]
    })
    setTotalPrice(newPrice)
  }, [cart])

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
      <section className='root'>
        <AppModal isOpen={cartIsOpen} closing={() => setCartIsOpen(false)}>
          <ModalCart cart={cart} addToCart={addToCart} totalPrice={totalPrice} closing={() => setCartIsOpen(false)} />
        </AppModal>
        <FixedCartButton totalPrice={totalPrice} onClick={() => setCartIsOpen(true)} />
        <div className='left'>
          <img src='/assets/images/rent/hookah-1-big.png' alt='' />
        </div>
        <div className='right'>
          <div className='configure-hookah'>
            <h2>
              Собери <span>свой кальян:</span>
            </h2>

            <RentalBlock2Mode mode={mode} setMode={setNextMode} />

            <RentalBlock2Variants mode={mode} visible={visible} addToCart={addToCart} />

            <div className='order-info'>
              <h3>ПРИ ЗАКАЗЕ КАЛЬЯНА ВЫ ПОЛУЧАЕТЕ КАЛЬЯННЫЙ НАБОР:</h3>
              <div className='hookah-kit'>
                <div className='hookah-kit-col'>
                  <div>
                    <img src='/assets/images/hookah-item.jpg' alt='' /> <div> Кальян</div>
                  </div>
                  <div>
                    <img src='/assets/images/hookah-item.jpg' alt='' /> <div> Плитка для углей</div>
                  </div>
                  <div>
                    <img src='/assets/images/hookah-item.jpg' alt='' /> <div> Одноразовые мундштуки</div>
                  </div>
                  <div>
                    <img src='/assets/images/hookah-item.jpg' alt='' /> <div> Табак</div>
                  </div>
                </div>
                <div className='hookah-kit-col'>
                  <div>
                    <img src='/assets/images/hookah-item.jpg' alt='' /> <div> Щипчики</div>
                  </div>
                  <div>
                    <img src='/assets/images/hookah-item.jpg' alt='' /> <div> Угли</div>
                  </div>
                  <div>
                    <img src='/assets/images/hookah-item.jpg' alt='' /> <div> Чаша</div>
                  </div>
                  <div>
                    <img src='/assets/images/hookah-item.jpg' alt='' />
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
                  <img src='/assets/images/hookah-item.jpg' alt='' />
                  +7 (925) 355-00-53
                </div>
              </div>
              <div className='order-result'>
                <div className='order-container'>
                  <div>
                    <span>Заказ на сумму:</span>
                    <span className='price'>{totalPrice} руб</span>
                  </div>
                  <Button1 onClick={() => setCartIsOpen(true)}>Открыть корзину</Button1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{
        /* language=CSS */ `
          .root {
            position: relative;
            width: 100vw;
            max-width: 1200px;
            margin: 50px auto 100px auto;
            display: flex;
          }

          .left {
            display: none;
          }

          @media screen and (min-width: 1200px) {
            .left {
              display: initial;
              margin-left: -300px;
              flex: 1 1;
            }
          }

          .left img {
          }

          .right {
            width: 100%;
            z-index: 1;
            flex: 2 2;
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
            font-size: 26px;
            font-weight: bold;
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

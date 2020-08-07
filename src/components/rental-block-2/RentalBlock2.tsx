import React, { FunctionComponent, useState } from 'react'
import { Button1 } from 'src/components/Button1'
import { RentalBlock2Mode } from 'src/components/rental-block-2/RentalBlock2Mode'
import { RentalBlock2Variants } from 'src/components/rental-block-2/RentalBlock2Variants'
import { useDidUpdate } from 'src/scripts/hooks/useDidUpdate'

export const RentalBlock2: FunctionComponent = () => {
  const [mode, setMode] = useState<rentalMode>('hookah')
  const [nextMode, setNextMode] = useState<rentalMode>('hookah')
  const [timeoutID, setTimeoutID] = useState(0)
  const [visible, setVisible] = useState(true)
  const [totalPrice, setTotalPrice] = useState(0)

  useDidUpdate(() => {
    if (timeoutID) clearTimeout(timeoutID)

    setTotalPrice(0)
    setVisible(false)

    let newTimeoutID = setTimeout(() => {
      setVisible(true)
      setMode(nextMode)
    }, 250)
    setTimeoutID(Number(newTimeoutID))
  }, [nextMode])

  return (
    <>
      <section className='configure'>
        <div className='container'>
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
                  <span className='price'>{totalPrice}</span>
                </div>
                <Button1>Открыть корзину</Button1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{
        /* language=CSS */ `
          .fixedPrice {
            position: fixed;
            right: 60px;
            bottom: 40px;
            z-index: 9999;
            border-radius: 50%;
            width: 80px;
            height: 80px;
            background: goldenrod;
          }

          h2,
          h3 {
            font-family: var(--app-font-alt);
          }

          h2 {
            font-weight: bold;
            font-size: 40px;
          }

          h2 > span {
            color: steelblue;
          }

          section {
            background: #10131c;
            margin: auto;
            width: 1200px;
          }

          section.configure {
            margin-top: 50px;
            margin-left: 525px;
            margin-bottom: 100px;
          }

          section.configure > .container {
            margin: auto;
          }

          .configure-hookah {
            margin: auto;
            width: 900px;
            padding: 0 50px;
          }

          .hookah-kit {
            display: flex;
          }

          .hookah-kit-col:nth-child(1) {
            margin-right: 50px;
          }

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
            margin-top: 50px;
            display: flex;
            justify-content: center;
          }

          .make-call-order > div:nth-child(1) {
            border-right: 1px white solid;
            padding-right: 60px;
            margin-left: 50px;
          }

          .make-call-order h3 {
            width: 390px;
            font-size: 28px;
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
            margin-left: 50px;
            display: flex;
            align-items: center;
          }

          .order-container {
          }

          .order-container > div:nth-child(1) {
            display: flex;
            align-items: center;
          }

          .order-container .price {
            margin-left: 20px;
            font-weight: bold;
            font-size: 24px;
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

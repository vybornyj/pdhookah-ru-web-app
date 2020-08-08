import React, { FunctionComponent } from 'react'
import { Button1 } from 'src/components/Button1'
import { rentalCartContent } from 'src/data/rentalCartContent'
import { rentalModes } from 'src/data/rentalModes'

interface props {
  cart: { [name: string]: number }
  addToCart: (mode: string, key: number | string, action?: 'add' | 'remove' | 'clear') => void
  totalPrice: number
  closing: () => void
}

export const ModalCart: FunctionComponent<props> = ({ cart, addToCart, totalPrice, closing }) => {
  const objectKeys = Object.keys(cart)

  return (
    <div className='cart'>
      {objectKeys.length ? (
        <>
          <div className='header'>
            <div className='close' onClick={closing}>
              <img className='img2' src='/assets/icons/remove.png' alt='' />
            </div>
          </div>
          <div className='main'>
            {objectKeys.map(objectKey => {
              const [mode, key] = objectKey.split('--')
              const { title, price, image } = rentalCartContent[mode][Number(key)]
              const modeTitle = rentalModes.find(el => el.mode === mode)?.title

              return (
                <div className='element' key={objectKey}>
                  <div className='remove' onClick={() => addToCart(mode, key, 'clear')}>
                    <img className='img2' src='/assets/icons/remove.png' alt='' />
                  </div>
                  <div className='img'>
                    <img className='img1' src={image} alt='' />
                  </div>
                  <div className='title'>
                    {modeTitle} - {title}
                  </div>

                  <div className='global-flex-1-0' />

                  <div className='counts'>
                    <div className='plus' onClick={() => addToCart(mode, key)}>
                      +
                    </div>
                    <div className='count'>{cart[objectKey]}</div>
                    <div className='minus' onClick={() => addToCart(mode, key, 'remove')}>
                      -
                    </div>
                  </div>
                  <div className='price'>{price * cart[objectKey]} руб</div>
                </div>
              )
            })}
          </div>
          <div className='footer'>
            <h3>Итого: {totalPrice}</h3>
            <Button1>Оформить заказ</Button1>
          </div>
        </>
      ) : (
        <>
          <div className='header'>
            <div className='close' onClick={closing}>
              <img className='img2' src='/assets/icons/remove.png' alt='' />
            </div>
          </div>
          <main>
            <h3>Корзина пуста</h3>
          </main>
        </>
      )}

      <style jsx>{
        /* language=CSS */ `
          .cart {
            width: 700px;
            min-width: 100%;
            background: white;
            padding: 0 0 20px;
          }

          .header {
            height: 30px;
            color: hsl(0, 0%, 70%);
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }

          .close {
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            background: hsl(0, 0%, 90%);
          }

          .main {
            padding: 5px 60px;
          }

          .element {
            height: 100px;
            border-bottom: 1px solid hsl(0, 0%, 80%);
            display: flex;
            flex-direction: row;
            align-items: center;
          }

          .remove {
            margin-right: 10px;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }

          .remove:hover {
            background: hsl(0, 0%, 90%);
            border-radius: 4px;
          }

          .img {
            margin: 0 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 80px;
            height: 80px;
          }

          img {
            max-width: 80px;
            max-height: 80px;
          }

          .element .title {
            padding: 20px;
          }

          .counts {
            margin: 10px;
            border-radius: 4px;
            border: 1px solid goldenrod;
            display: flex;
          }

          .plus,
          .minus {
            padding: 5px;
            text-align: center;
            width: 30px;
            cursor: pointer;
          }

          .plus:hover,
          .minus:hover {
            background: goldenrod;
          }

          .count {
            padding: 5px;
            text-align: center;
            width: 30px;
            border-left: 1px solid goldenrod;
            border-right: 1px solid goldenrod;
          }

          .price {
            width: 80px;
            text-align: right;
          }

          h3 {
            text-transform: uppercase;
            color: steelblue;
            font-family: var(--app-font-alt);
          }

          .footer {
            padding: 0 10px 15px 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end;
          }

          .footer > h3 {
            margin: 30px 10px;
          }
        `
      }</style>
    </div>
  )
}

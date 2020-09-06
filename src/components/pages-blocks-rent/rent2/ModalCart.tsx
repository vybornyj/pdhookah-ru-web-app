import React, { FunctionComponent } from 'react'
import { AppButton } from 'src/components/common/buttons/AppButton'
import { rentalCartContent } from 'src/data/rentalCartContent'
import { rentalModes } from 'src/data/rentalModes'
import { useStore } from 'src/scripts/useStore'

export const ModalCart: FunctionComponent = () => {
  const storeCartPrice = useStore((state) => state.storeCartPrice)
  const storeCartContents = useStore((state) => state.storeCartContents)
  const STORE_MANAGE_CART_ITEM = useStore((state) => state.STORE_MANAGE_CART_ITEM)
  const objectKeys = Object.keys(storeCartContents)

  return (
    <div className='cart'>
      {objectKeys.length ? (
        <>
          <div className='main'>
            {objectKeys.map((objectKey) => {
              const [mode, key] = objectKey.split('--')
              const { title, price, image } = rentalCartContent[mode][Number(key)]
              const modeTitle = rentalModes.find((el) => el.mode === mode)?.title

              return (
                <div className='element' key={objectKey}>
                  <div className='remove' onClick={() => STORE_MANAGE_CART_ITEM(mode, key, 'clear')}>
                    <img className='img2' src='/icons/remove.png' alt='' />
                  </div>
                  <div className='img'>
                    <img className='img1' src={image} alt='' />
                  </div>
                  <div className='title'>
                    {modeTitle} - {title}
                  </div>

                  <div className='global-flex-1-0' />

                  <div className='counts'>
                    <div className='plus' onClick={() => STORE_MANAGE_CART_ITEM(mode, key, 'add')}>
                      +
                    </div>
                    <div className='count'>{storeCartContents[objectKey]}</div>
                    <div className='minus' onClick={() => STORE_MANAGE_CART_ITEM(mode, key, 'remove')}>
                      -
                    </div>
                  </div>
                  <div className='price'>{price * storeCartContents[objectKey]} руб</div>
                </div>
              )
            })}
          </div>
          <div className='footer'>
            <h3>Итого: {storeCartPrice}</h3>
            <AppButton>Оформить заказ</AppButton>
          </div>
        </>
      ) : (
        <div className='main'>
          <h3>Корзина пуста</h3>
        </div>
      )}

      <style jsx>{
        /* language=CSS */ `
          .cart {
            min-width: 100%;
            background: white;
            padding: 20px 0;
            width: auto !important;
          }

          .main {
            padding: 0 10px;
          }

          .element {
            border-bottom: 1px solid hsl(0, 0%, 80%);
            display: flex;
            align-items: center;
            flex-direction: column;
            height: auto !important;
            position: relative;

            padding: 45px 0;
          }

          .remove {
            margin-right: 10px;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            position: absolute;
            top: 25px;
            left: 55px;
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
            margin: 30px 10px;
            text-align: center;
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

          @media screen and (min-width: 1024px) {
            .element {
              height: 100px;
              flex-direction: row;
            }

            .main {
              padding: 5px 60px;
            }

            .cart {
              width: 700px;
            }

            .remove {
              position: initial;
            }
          }
        `
      }</style>
    </div>
  )
}

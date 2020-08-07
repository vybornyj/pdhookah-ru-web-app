import React, { FunctionComponent } from 'react'
import { rentalCartContent } from 'src/data/rentalCartContent'
import { rentalModes } from 'src/data/rentalModes'

interface props {
  cart: { [name: string]: number }
}

export const ModalCart: FunctionComponent<props> = ({ cart }) => {
  const objectKeys = Object.keys(cart)

  return (
    <div className='cart'>
      <div className='header' />
      <div className='main'>
        {objectKeys.map(objectKey => {
          const [mode, key] = objectKey.split('--')
          const { title, price, image } = rentalCartContent[mode][Number(key)]
          const modeTitle = rentalModes.find(el => el.mode === mode)?.title

          return (
            <div className='element' key={objectKey}>
              <div className='remove'>
                <img className='img2' src='/assets/icons/remove.png' alt='' />
              </div>
              <div className='img'>
                <img className='img1' src={image} alt='' />
              </div>
              <div className='title'>
                {modeTitle} - {title}
              </div>

              <div className='global-flex-1-0' />

              <div className='count'>{cart[objectKey]}</div>
              <div className='price'>{price * cart[objectKey]} руб</div>
            </div>
          )
        })}
      </div>

      <style jsx>{
        /* language=CSS */ `
          .cart {
            width: 700px;
            min-width: 100%;
            background: white;
          }

          .header {
            height: 100px;
            color: hsl(0, 0%, 70%);
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

          .count {
            margin: 10px;
          }

          .price {
            width: 80px;
            text-align: right;
          }
        `
      }</style>
    </div>
  )
}

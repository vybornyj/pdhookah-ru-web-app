import React, { FunctionComponent } from 'react'

interface Props {
  totalPrice: number
}

export const FixedCartButton: FunctionComponent<Props> = ({ totalPrice }) => {
  return (
    <>
      <div className='price'>{`${totalPrice} руб`}</div>
      <div className='fixedPrice'>
        <img src='/assets/icons/cart-26-33.png' alt='' />
      </div>

      <style jsx>{
        /* language=CSS */ `
          .price {
            font-size: 18px;
            text-align: center;
            width: 160px;
            position: fixed;
            right: 20px;
            bottom: 125px;
            z-index: 9999;
            font-family: var(--app-font-alt);
            text-shadow: 1px 1px 4px black, 2px 2px 8px black;
          }
          .fixedPrice {
            display: flex;
            align-items: center;
            justify-content: center;
            position: fixed;
            right: 60px;
            bottom: 40px;
            z-index: 9999;
            border-radius: 50%;
            width: 80px;
            height: 80px;
            background: var(--app-gradient-gold);
            box-shadow: 1px 1px 4px black, 2px 2px 8px black;
          }
        `
      }</style>
    </>
  )
}

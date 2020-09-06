import React, { FunctionComponent } from 'react'
import { useStore } from 'src/scripts/useStore'

interface Props {
  isOpen: boolean
  onClick: () => void
}

export const FixedCartButton: FunctionComponent<Props> = ({ isOpen, onClick }) => {
  const storeCartPrice = useStore((state) => state.storeCartPrice)
  if (isOpen) return null
  return (
    <>
      <div className='price'>{`${storeCartPrice} руб`}</div>
      <div className='fixedPrice' onClick={onClick}>
        <img src='/icons/cart-26-33.png' alt='' />
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
            z-index: 999;
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
            z-index: 999;
            border-radius: 50%;
            width: 80px;
            height: 80px;
            background: var(--app-gradient-gold);
            box-shadow: 1px 1px 4px black, 2px 2px 8px black;
            cursor: pointer;
          }
        `
      }</style>
    </>
  )
}

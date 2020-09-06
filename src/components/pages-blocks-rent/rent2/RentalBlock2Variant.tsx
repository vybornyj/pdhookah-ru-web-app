import React, { FunctionComponent, useRef } from 'react'
import { flyingImage } from 'src/components/pages-blocks-rent/rent2/flyingImage'

interface props {
  title: string
  price: number
  image: string
  imageTop: number
  imageLeft: number
  addToCart: () => void
}

export const RentalBlock2Variant: FunctionComponent<props> = ({ title, price, image, imageTop = 0, imageLeft = 0, addToCart }) => {
  const imgRef = useRef()

  const onClick = () => {
    // @ts-ignore
    flyingImage(image, imgRef?.current?.getBoundingClientRect())
    addToCart()
  }

  return (
    <div className='variant global-column'>
      <div className='price'>{price} руб</div>
      <div className='circle'>
        <div className='circle2' />
        {/* @ts-ignore */}
        <img className='img1' src={image} alt={title} ref={imgRef} />
      </div>
      <div className='title'>{title}</div>

      <div className='global-flex-1-0' />
      <div className='add' onClick={onClick}>
        <img className='img2' src='/icons/cart-15-15.png' alt='' />
      </div>
      <style jsx>{
        /* language=CSS */ `
          .variant {
            align-items: center;
            text-align: center;

            width: 130px;
            margin: 10px 10px;
          }

          .price {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            padding: 4px 0;

            font-family: var(--app-font-alt);
            width: 100px;
            background: var(--app-gradient-gold);
            border-radius: 5px;
            box-shadow: 0 4px 9px rgba(0, 0, 0, 0.8);
          }

          .circle {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;

            margin-top: 50px;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            box-shadow: 0 0 2px 1px hsl(38, 100%, 66%), inset 0 0 2px 1px hsl(38, 100%, 66%), 0 0 30px -1px hsl(0, 0%, 100%);
          }

          .circle2 {
            width: 86px;
            height: 86px;
            border-radius: 50%;
            background: radial-gradient(hsl(0, 0%, 100%), hsl(0, 0%, 90%));
            box-shadow: 0 0 3px 0 hsl(0, 0%, 100%);
          }

          .img1 {
            z-index: 1;
            position: absolute;
            top: ${imageTop}px;
            left: ${imageLeft}px;
          }

          .title {
            font-size: 14px;
            margin-top: 15px;
            text-transform: uppercase;
          }

          .add {
            margin-top: 12px;
            width: 45px;
            height: 25px;
            border-radius: 5px;
            box-shadow: 0 0 1px 1px darkgoldenrod;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .add:hover {
            color: white;
            background: darkgoldenrod;
          }

          .add:hover .img2 {
            filter: brightness(0) invert(1);
          }
        `
      }</style>
    </div>
  )
}

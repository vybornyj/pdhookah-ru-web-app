import React, { FunctionComponent, useRef, useState } from 'react'
import { FlyingImage } from 'src/components/FlyingImage'

interface props {
  title: string
  price: number
  image: string
  imageTop?: number
  imageLeft?: number
}

export const RentalBlock2Variant: FunctionComponent<props> = ({ title, price, image, imageTop = 0, imageLeft = 0 }) => {
  const imgRef = useRef()
  const [fly, setFly] = useState({ top: 0, left: 0, width: 0, height: 0 })
  const [timeoutID, setTimeoutID] = useState(null)
  const [visible, setVisible] = useState(true)

  const onClick = () => {
    // @ts-ignore
    const { top, left, width, height } = imgRef?.current?.getBoundingClientRect()
    setFly({ top, left, width, height })
    setVisible(false)

    if (timeoutID) clearTimeout(timeoutID)

    let newTimeoutID = setTimeout(() => {
      setVisible(true)
      setFly({ top: document.documentElement.offsetHeight - 80, left: document.documentElement.offsetWidth - 100, width: 0, height: 0 })
    }, 100)
    setTimeoutID(newTimeoutID)
  }

  return (
    <div className='variant global-column'>
      <FlyingImage image={image} fly={fly} visible={visible} />
      <div className='price'>{price} руб</div>
      <div className='circle'>
        <div className='circle2' />
        <img src={image} alt={title} ref={imgRef} />
      </div>
      <div className='title'>{title}</div>

      <div className='global-flex-1-0' />
      <div className='add' onClick={onClick}>
        add
      </div>
      <style jsx>{
        /* language=CSS */ `
          .variant {
            align-items: center;
            text-align: center;

            width: 150px;
            margin: 0 10px;
          }

          .price {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            padding: 4px 0;

            font-family: 'nickelodeon-headline', sans-serif;
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

          img {
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
            box-shadow: 0 0 2px 1px darkgoldenrod;
            cursor: pointer;
          }

          .add:hover {
            color: white;
            background: darkgoldenrod;
          }
        `
      }</style>
    </div>
  )
}

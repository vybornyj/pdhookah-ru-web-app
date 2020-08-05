import React, { FunctionComponent } from 'react'

interface props {
  visible: boolean
  image: string
  fly: {
    top: number
    left: number
    width: number
    height: number
  }
}

export const FlyingImage: FunctionComponent<props> = ({ image, fly, visible }) => {
  if (!fly) return null
  console.log('fly', fly)
  return (
    <>
      <img className={`${String(visible)}`} src={image} alt='' />
      <style jsx>{
        /* language=CSS */ `
          img {
            z-index: 999;
            position: fixed;
            top: ${fly.top}px;
            left: ${fly.left}px;
            width: ${fly.width}px;
            height: ${fly.height}px;
          }
          img.false {
          }
          img.true {
            transition: 0.75s all ease-in-out;
          }
        `
      }</style>
    </>
  )
}

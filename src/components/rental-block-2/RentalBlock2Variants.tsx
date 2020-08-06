import React, { FunctionComponent, useEffect, useState } from 'react'
import { FixedCartButton } from 'src/components/rental-block-2/FixedCartButton'
import { RentalBlock2Variant } from 'src/components/rental-block-2/RentalBlock2Variant'
import { rentalCartContent } from 'src/data/rentalCartContent'

interface props {
  mode: rentalMode
  visible: boolean
}

export const RentalBlock2Variants: FunctionComponent<props> = ({ mode, visible }) => {
  const [cart, setCart] = useState<{ [name: string]: number }>({})
  const [totalPrice, setTotalPrice] = useState(0)
  const addToCart = (mode: string, key: number) => {
    const id = [mode, key].join('--')
    let newCart = { ...cart }
    newCart[id] = cart[id] ? cart[id] + 1 : 1
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

  return (
    <div className={`${String(visible)}`}>
      <FixedCartButton totalPrice={totalPrice} />
      {rentalCartContent[mode].map((props, key) => (
        <RentalBlock2Variant {...props} addToCart={() => addToCart(mode, key)} key={props.title} />
      ))}
      <style jsx>{
        /* language=CSS */ `
          div {
            margin-top: 30px;
            min-height: 273px;
            display: flex;
            justify-content: center;
            transition: 0.25s all ease-out;
            opacity: 1;
          }
          div.false {
            opacity: 0;
          }
        `
      }</style>
    </div>
  )
}

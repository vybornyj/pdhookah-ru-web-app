import React, { FunctionComponent } from 'react'
import { RentalBlock2Variant } from 'src/components/rental-block-2/RentalBlock2Variant'
import { rentalCartContent } from 'src/data/rentalCartContent'

interface props {
  mode: rentalMode
  visible: boolean
  addToCart: (mode: string, key: number) => void
}

export const RentalBlock2Variants: FunctionComponent<props> = ({ mode, visible, addToCart }) => {
  return (
    <div className={`${String(visible)}`}>
      {rentalCartContent[mode].map((props, key) => (
        <RentalBlock2Variant {...props} addToCart={() => addToCart(mode, key)} key={props.title} />
      ))}
      <style jsx>{
        /* language=CSS */ `
          div {
            flex-wrap: wrap;
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

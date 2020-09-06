import React, { FunctionComponent } from 'react'
import { RentalBlock2Variant } from 'src/components/pages-blocks-rent/rent2/RentalBlock2Variant'
import { rentalCartContent } from 'src/data/rentalCartContent'
import { useStore } from 'src/scripts/useStore'

interface props {
  mode: rentalMode
  visible: boolean
}

export const RentalBlock2Variants: FunctionComponent<props> = ({ mode, visible }) => {
  const STORE_MANAGE_CART_ITEM = useStore((state) => state.STORE_MANAGE_CART_ITEM)
  return (
    <div className={`${String(visible)}`}>
      {rentalCartContent[mode].map((props, key) => (
        <RentalBlock2Variant {...props} addToCart={() => STORE_MANAGE_CART_ITEM(mode, key, 'add')} key={props.title} />
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

import React, { FunctionComponent } from 'react'
import { RentalBlock2Variant } from 'src/components/RentalBlock2Variant'
import { modes } from 'src/components/RentalBlock2VariantsData'

interface props {
  mode: rentalMode
  visible: boolean
}

export const RentalBlock2Variants: FunctionComponent<props> = ({ mode, visible }) => {
  return (
    <div className={`${String(visible)}`}>
      {modes[mode].map(({ title, ...props }) => (
        <RentalBlock2Variant title={title} {...props} key={title} />
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

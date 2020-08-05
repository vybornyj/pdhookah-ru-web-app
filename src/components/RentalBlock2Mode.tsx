import React, { FunctionComponent } from 'react'
import { modes } from 'src/components/RentalBlock2ModeData'

interface props {
  mode: rentalMode
  setMode: (mode: rentalMode) => void
}

export const RentalBlock2Mode: FunctionComponent<props> = ({ mode: currentMode, setMode }) => {
  return (
    <div className='modes'>
      {modes.map(({ mode, title }) => (
        <div onClick={() => setMode(mode)} className={String(mode === currentMode)} key={mode}>
          {title}
        </div>
      ))}
      <style jsx>{
        /* language=CSS */ `
          .modes {
            margin-top: 40px;
            display: flex;
          }

          .modes > div {
            margin-right: 30px;
            padding: 10px 25px;
            text-transform: uppercase;

            border-radius: 0;
            cursor: pointer;
          }

          .modes > div.true {
            color: darkgoldenrod;
            font-weight: bold;
            transition: 0.5s all ease-out;

            box-shadow: 0 0 2px 1px darkgoldenrod;
            border-radius: 15px;
            cursor: default;
          }
        `
      }</style>
    </div>
  )
}

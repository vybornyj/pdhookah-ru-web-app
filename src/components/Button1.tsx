import React, { FunctionComponent } from 'react'

interface Props {
  variant?: 'blue' | 'bluePrev' | 'yellow'
}

export const Button1: FunctionComponent<Props> = ({ children, variant = 'blue' }) => {
  return (
    <div className={variant}>
      {children}
      <style jsx>{
        /* language=CSS */ `
          div {
            text-transform: uppercase;
            display: inline-block;
            line-height: 70px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            border-radius: 10px;
            margin-right: 40px;
            width: 335px;
            text-align: center;
            font-size: 18px;
            letter-spacing: 1px;
          }
          div.bluePrev {
            background: linear-gradient(90deg, #125b90, #3795dd);
          }
          div.blue {
            background: linear-gradient(244.24deg, #42a7f2 -16.97%, #003d6a 134.56%, #1a88db 134.56%);
          }
          div.yellow {
            background: linear-gradient(90deg, #bf841e, #ebad40);
          }
        `
      }</style>
    </div>
  )
}

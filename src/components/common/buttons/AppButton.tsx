import React, { FunctionComponent } from 'react'

interface Props {
  variant?: 'blue' | 'bluePrev' | 'yellow'
  onClick?: () => void
}

export const AppButton: FunctionComponent<Props> = ({ children, variant = 'blue', onClick }) => {
  return (
    <div className={variant} onClick={onClick}>
      {children}
      <style jsx>{
        /* language=CSS */ `
          div {
            text-transform: uppercase;
            display: inline-block;
            line-height: 60px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

            margin: 0 0 30px 0;
            border-radius: 10px;
            padding: 0 30px;
            text-align: center;
            letter-spacing: 1px;
            cursor: pointer;
            color: white;
            min-width: 280px;
          }

          div.bluePrev {
            background: linear-gradient(90deg, #125b90, #3795dd);
          }

          div.blue {
            background: linear-gradient(244.24deg, #42a7f2 -16.97%, #003d6a 134.56%, #1a88db 134.56%);
          }

          div.yellow {
            background: var(--app-gradient-gold);
          }

          @media screen and (min-width: 1024px) {
            div {
              line-height: 70px;
            }
          }
        `
      }</style>
    </div>
  )
}

import React, { FunctionComponent } from 'react'

export const Button1: FunctionComponent = ({ children }) => (
  <div>
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
          background: linear-gradient(90deg, #125b90, #3795dd);
        }
      `
    }</style>
  </div>
)

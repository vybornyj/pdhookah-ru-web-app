import React, { FunctionComponent } from 'react'
import { TemplateHead } from 'src/components/template/TemplateHead'

interface Props {
  error?: boolean
  title?: string
  description?: string
}

export const Template: FunctionComponent<Props> = ({ title, description, error, children }) => {
  return (
    <>
      <TemplateHead title={error ? '404' : title} description={description} />

      <div className='template'>
        <div className='main'>{children}</div>
      </div>

      <style jsx global>{
        /* language=CSS */ `
          body {
            background: hsl(224, 26%, 8%);
          }
          #__background {
            background: hsl(224, 26%, 8%);
          }
        `
      }</style>

      <style jsx>{
        /* language=CSS */ `
          .template {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            color: white;
          }
          /*.main > :global(section) {*/
          /*  margin: auto;*/
          /*  width: 1200px;*/
          /*}*/
        `
      }</style>
    </>
  )
}

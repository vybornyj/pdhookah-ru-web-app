import Head from 'next/head'
import { useRouter } from 'next/router'
import { FunctionComponent } from 'react'

interface Props {
  title?: string
  description?: string
}

export const TemplateHead: FunctionComponent<Props> = ({ title, description }) => {
  const router = useRouter()

  return (
    <Head>
      <title>{title ? `${title} - Кальяны МСК` : 'Кальяны МСК'}</title>
      <meta name='description' content={description ?? 'Кальяны в Москве, арендна и доставка, кальянный кейтеринг'} />
      <meta name='viewport' content='minimum-scale=5, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' />
      <link rel='canonical' href={`/${router.asPath}`} />
    </Head>
  )
}

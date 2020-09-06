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
      <title>{title ? `${title} - Подводный Дым` : 'Подводный Дым - Кальяны в Москве'}</title>
      <meta name='description' content={description ?? 'Кальяны в Москве, арендна и доставка, кальянный кейтеринг'} />
      <meta name='viewport' content='initial-scale=1, width=device-width, maximum-scale=1, minimum-scale=1' />
      <link rel='canonical' href={`/${router.asPath}`} />
    </Head>
  )
}

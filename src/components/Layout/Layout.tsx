import { Container } from '@mantine/core'
import { useRouter } from 'next/router'
import { NextSeo, NextSeoProps } from 'next-seo'
import React from 'react'

import { Favicons } from './Favicons'
import Footer from './Footer'
import Header from './Header'

export default function Layout({
  children,
  ...props
}: React.PropsWithChildren<NextSeoProps>) {
  const router = useRouter()

  return (
    <>
      <NextSeo
        titleTemplate='Tools'
        defaultTitle='Tools'
        description='Tools to help you.'
        canonical={`https://tools-hong.vercel.app${router.asPath}`}
        twitter={{
          cardType: 'summary_large_image',
          site: '@VaLandscapes',
          handle: '@VaLandscapes',
        }}
        openGraph={{
          url: `https://tools-hong.vercel.app${router.asPath}`,
          type: 'website',
          title: 'Tools',
          description: 'Tools to help you.',
          images: [
            {
              url: 'https://honghong.me/static/images/og/og.png',
              width: 1200,
              height: 630,
              alt: 'Online Tools',
            },
          ],
        }}
        additionalLinkTags={[...Favicons]}
        {...props}
      />
      <Header />
      <Container py={48}>{children}</Container>
      <Footer />
    </>
  )
}

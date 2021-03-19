import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { NextSeo } from 'next-seo'
import { Box } from 'reflexbox'

function Contact() {
  const { t } = useTranslation()
  const SEO = {
    title: t('contact:title'),
    description: 'Just your normal about page',
    openGraph: {
      title: t('contact:title'),
      description: 'Just your normal about page',
    },
  }
  return (
    <>
      <NextSeo {...SEO} />
      <Box className="container">
        <Box as="h2" my={40}>
          {t('contact:title')}
        </Box>
        <div
          dangerouslySetInnerHTML={{
            __html: t('contact:description', {
              email: 'hugopcveloso@gmail.com',
            }),
          }}
        />
      </Box>
    </>
  )
}
export default Contact

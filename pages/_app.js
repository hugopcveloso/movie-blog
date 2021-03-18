/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
// import App from 'next/app'
import React from 'react'
import Header from 'components/Header'
import { ThemeProvider } from '@emotion/react'
import GlobalStyles from 'components/GlobalStyles/GlobalStyles'
import theme from '../theme/theme.js'
import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import ContextWrapper from 'components/ContextWrapper'
import Footer from 'components/Footer'

function MyApp({ Component, pageProps, navigation }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ContextWrapper navigation={navigation}>
          <Header />
        </ContextWrapper>

        <Component {...pageProps} />

        <Footer />
      </ThemeProvider>
    </>
  )
}

//we cannot use getServerSideProps here, just getinitial

MyApp.getInitialProps = async () => {
  const { publicRuntimeConfig } = getConfig()

  const res = await fetch(`${publicRuntimeConfig.API_URL}/navigations`)
  const navigation = await res.json()

  return { navigation }
}

export default MyApp

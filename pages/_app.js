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

function MyApp({ Component, pageProps, navigation }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header navigation={navigation} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

const { publicRuntimeConfig } = getConfig()
//we cannot use getServerSideProps here, just getinitial

MyApp.getInitialProps = async () => {
  const res = await fetch(`${publicRuntimeConfig.API_URL}/navigations`)
  const navigation = await res.json()

  return { navigation }
}

export default MyApp

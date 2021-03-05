/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
// import App from 'next/app'
import React from 'react'
import Header from 'components/Header'
import { ThemeProvider } from '@emotion/react'
import GlobalStyles from 'components/GlobalStyles/GlobalStyles'
import theme from '../theme/theme.js'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header isDark />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp

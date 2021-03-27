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
import { QueryClientProvider, QueryClient } from 'react-query'
import { AnimatePresence, motion } from 'framer-motion'
import styled from '@emotion/styled'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps, navigation, router }) {
  const spring = {
    type: 'spring',
    damping: 20,
    stiffness: 100,
    when: 'afterChildren',
  }
  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ContextWrapper navigation={navigation}>
          <Header />
        </ContextWrapper>
        <QueryClientProvider client={queryClient}>
          <AnimatePresence exitBeforeEnter initial={false}>
            <StyledContainer
              as={motion.div}
              transition={spring}
              key={router.pathname}
              initial="pageInitial"
              animate="pageAnimate"
              exit="pageExit"
              variants={{
                pageInitial: {
                  opacity: 0,
                },
                pageAnimate: {
                  opacity: 1,
                },
                pageExit: {
                  opacity: 0,
                },
              }}
              id="page-transition-container"
            >
              <Component {...pageProps} key={router.pathname} />
            </StyledContainer>
          </AnimatePresence>
        </QueryClientProvider>

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

const StyledContainer = styled.div``

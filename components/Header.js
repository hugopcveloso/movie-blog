import React from 'react'
import styled from '@emotion/styled'
import { Flex, Box } from 'reflexbox'
import Navigation from 'components/Navigation'
import Link from 'next/link'
//import ToggleNavigationColorButton from 'components/ToggleNavigationColorButton'

function Header({ isDark }) {
  return (
    <HeaderStyled isDark={isDark}>
      <Box variant="container">
        <Flex justifyContent="space-between" alignItems="center">
          <div className="logo">
            <Link href="/">
              <a>
                <img src="/static/images/logo.svg" alt="Sites Logo" />
                <span className="logo-text">Media I watched</span>
              </a>
            </Link>
          </div>
          <Navigation />
          {/* <ToggleNavigationColorButton /> */}
        </Flex>
      </Box>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  background: ${props => (props.isDark ? 'darkgrey' : 'lightblue')};
  padding: 20px;
  .logo {
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
    }

    img {
      width: 60px;
      height: 60px;
    }
    .logo-text {
      color: #333333;
      font-weight: bold;
      font-size: 20px;
      margin-left: 20px;
    }
  }
`

export default Header

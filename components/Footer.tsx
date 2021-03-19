import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import HeaderContext from '../contexts/HeaderContext'

function Footer() {
  const router = useRouter()
  return (
    <FooterStyled>
      <ul>
        {router?.locales?.map((locale, i) => (
          <Link key={i} href={router.asPath} locale={locale}>
            <a> {locale} </a>
          </Link>
        ))}
      </ul>
    </FooterStyled>
  )
}

const FooterStyled = styled.div`
  height: 50px;
  background-color: lightblue;
  padding: 20px;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    li {
      margin-left: 10px;
    }
    a {
      text-decoration: none;
      /* color: #4c9ee3; */
      color: '#4C9EE3';
      &:hover {
        text-decoration: underline;
      }
      &.active {
        color: black;
      }
    }
  }
`

export default Footer

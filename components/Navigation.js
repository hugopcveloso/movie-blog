import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'

function Navigation() {
  const router = useRouter()
  return (
    <NavigationStyled>
      <ul>
        <li>
          <Link href="/about">
            <a className={router.pathname === '/about' ? 'active' : ''}>
              About
            </a>
          </Link>
          <Link href="/contact">
            <a className={router.pathname === '/contact' ? 'active' : ''}>
              Contact
            </a>
          </Link>
          <Link href="/blog">
            <a className={router.pathname === '/blog' ? 'active' : ''}>Blog</a>
          </Link>
        </li>
      </ul>
    </NavigationStyled>
  )
}

const NavigationStyled = styled.div`
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
      color: #4c9ee3;
      &:hover {
        text-decoration: underline;
      }
      &.active {
        color: black;
      }
    }
  }
`

export default Navigation

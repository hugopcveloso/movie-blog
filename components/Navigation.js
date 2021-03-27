import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import HeaderContext from '../contexts/HeaderContext'

function Navigation() {
  const router = useRouter()
  const { menuItems } = useContext(HeaderContext)
  return (
    <NavigationStyled>
      <ul>
        {menuItems.map(link => (
          <li key={link.id}>
            <Link href={link.slug}>
              <a className={router.pathname === link.slug ? 'active' : ''}>
                {link.title}
              </a>
            </Link>
          </li>
        ))}
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
      /* color: #4c9ee3; */
      color: '#4C9EE3';
      &:hover {
        text-decoration: underline;
      }
      &.active {
        font-weight: bold;
        color: black;
      }
    }
  }
`

export default Navigation

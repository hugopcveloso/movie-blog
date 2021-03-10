import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'

function Navigation({ navigation }) {
  const router = useRouter()
  return (
    <NavigationStyled>
      <ul>
        {navigation.map(link => (
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

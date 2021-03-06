import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.5,
    },
  },
}

const item = {
  hidden: { opacity: 0, x: -5 },
  show: { opacity: 1, x: 0, y: 0 },
  type: 'tween',
}

const TagsMenu = ({ tags }) => {
  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <TagsContainer>
        {tags.map(({ tag_name, id, slug }, i) => {
          return (
            <motion.div variants={item} className="list" key={id}>
              <Link href={`/tags/${slug}`} key={id}>
                <a className="tag-button">{tag_name}</a>
              </Link>
            </motion.div>
          )
        })}
      </TagsContainer>
    </motion.div>
  )
}

const TagsContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
  margin-top: 20px;
  .tag-button {
    color: white;
    background-color: #151c59;
    padding: 10px;
    margin-right: 10px;
    border-radius: 30px;
    text-decoration: none;
  }
`

export default TagsMenu

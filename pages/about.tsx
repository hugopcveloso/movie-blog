import React from 'react'
import { NextSeo } from 'next-seo'
import { Box } from 'reflexbox'

export interface AboutProps {
  page: AboutFetch
}

function About({ page }: AboutProps) {
  const SEO = {
    title: page?.title,
    description: 'Just your normal about page',
    openGraph: {
      title: page?.title,
      description: 'Just your normal about page',
    },
  }
  return (
    <>
      <NextSeo {...SEO} />
      <Box className="container">
        <Box as="h2" my={40}>
          {page?.title}
        </Box>
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
      </Box>
    </>
  )
}

export interface AboutFetch {
  title: string
  content: string
}

export async function getStaticProps() {
  const API_URL = process.env.API_URL
  const res = await fetch(`${API_URL}/pages/1`)
  const data: AboutFetch | undefined = await res.json()

  return {
    props: {
      page: data,
    },
    revalidate: 1, //it revalidates the api data
  }
}
export default About

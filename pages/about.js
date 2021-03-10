import React from 'react'
import { NextSeo } from 'next-seo'

function About() {
  const SEO = {
    title: 'About page',
    description: 'Just your normal about page',
    openGraph: {
      title: 'About page',
      description: 'Just your normal about page',
    },
  }
  return (
    <>
      <NextSeo {...SEO} />
      <h2>This is a About page</h2>
    </>
  )
}
export default About

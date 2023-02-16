import { Container } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import { Footer } from '../ui/footer'
import { Navbar } from '../ui/navbar'

export const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{`${title} - portfolio`}</title>
        <meta name="description" content="portfolio daniel" />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, ReactJS, NextJS"
        />
        <meta name="author" content="Daniel Carmona Gilibert" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Container
        as="main"
        maxW="container.sm"
        minH="container.md"
        pt={24}
        px={{ base: '5', md: '16', '2xl': '5' }}>
        {children}
      </Container>
      <Footer />
    </>
  )
}

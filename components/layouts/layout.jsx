import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import { Navbar } from '../ui/navbar'

export const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{`${title} - portfolio`}</title>
        <meta name="description" content="portfolio daniel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as="main" pb={24}>
        <Navbar />
        <Container
          maxW="container.sm"
          pt={24}
          px={{ base: '5', md: '16', '2xl': '5' }}>
          {children}
        </Container>
      </Box>
    </>
  )
}

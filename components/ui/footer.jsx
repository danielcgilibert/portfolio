import { Box, Text } from '@chakra-ui/react'
import React from 'react'

export const Footer = () => {
  return (
    <Box
      textAlign="center"
      as="footer"
      mt="3rem"
      maxW="container.sm"
      borderTop="2px"
      borderColor="colors.700"
      p="25px"
      color="colors.500"
      opacity="70%"
      mx={{ base: '20px', md: 'auto' }}>
      <Text fontSize="md">© Daniel 2022</Text>
    </Box>
  )
}

import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'

export const Presentation = () => {
  return (
    <Box as="section">
      <Flex
        flexDir={{ base: 'column', md: 'row' }}
        justify="space-between"
        align="center">
        <Box textAlign={{ base: 'center', md: 'left' }}>
          <Stack spacing="0">
            <Heading
              bg={useColorModeValue('colors.900', 'white')}
              fontWeight="extrabold"
              bgClip="text"
              as="h1"
              fontSize="4xl">
              Daniel Carmona
            </Heading>
            <Heading as="h2" fontSize="xl">
              💻 Front-End Developer
            </Heading>
          </Stack>
        </Box>
        <Image
          borderRadius="full"
          boxSize="130px"
          border="4px"
          objectFit="cover"
          borderColor="colors.100"
          src="/profile.jpeg"
          mt={{ base: '5', md: '0' }}
          alt="Daniel image"
        />
      </Flex>
    </Box>
  )
}

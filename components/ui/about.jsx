import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Flex,
  Link as LinkChakra,
  Stack,
  Text,
} from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { TitleSection } from './title-section'

export const About = () => {
  return (
    <Box as="section">
      <TitleSection title="Sobre Mi" />

      <Stack spacing="6" textAlign="left" sx={{ wordSpacing: 1 }}>
        <Text
          css={{
            '&::first-letter': {
              // marginLeft: '8px',
              fontSize: '1.4rem',
            },
          }}
          fontSize="lg">
          Siempre interesado en seguir desarrollando en este apasionante mundo
          del desarrollo.
        </Text>
        <Text fontSize="lg">
          Enfocado en las últimas tecnologías como React, NextJS, Docker,
          NodeJS...
        </Text>
        <Text fontSize="lg">
          Si quieres contactarme, háblame por{' '}
          <LinkChakra
            color="colors.100"
            href="https://es.linkedin.com/in/danielcarmonagilibert"
            fontWeight="bold"
            isExternal>
            LinkedIn
          </LinkChakra>{' '}
          y te responderé con la mayor brevedad posible.
        </Text>
      </Stack>

      <Flex justify="center">
        <Link href="/projects">
          <Button
            transition="transform .25s ease"
            _hover={{ transform: 'scale(1.07)' }}
            mt={{ base: '5' }}
            color="colors.100">
            Mi portfolio <ChevronRightIcon />
          </Button>
        </Link>
      </Flex>
    </Box>
  )
}

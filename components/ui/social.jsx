import { Icon } from '@chakra-ui/icons'
import { Box, Button, Link, List, ListItem, Stack } from '@chakra-ui/react'
import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { FaDev } from 'react-icons/fa'
import { TitleSection } from './title-section'

export const Social = () => {
  return (
    <Box as="section">
      <TitleSection title="Webs" />
      <Stack spacing="1" ml={{ base: '0', md: '0' }} color="colors.100">
        <List
          display="flex"
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems={{ base: 'flex-start', md: 'baseline' }}
          justifyContent="space-between"
          spacing={3}>
          <ListItem>
            <Link href="https://github.com/danielcgilibert" isExternal>
              <Button
                pl="5px"
                bg="transparent"
                leftIcon={<Icon as={AiFillGithub} w={6} h={6} />}>
                @DanielCG
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://es.linkedin.com/in/danielcarmonagilibert"
              isExternal>
              <Button
                pl="5px"
                textUnderlineOffset="2"
                bg="transparent"
                leftIcon={<Icon as={AiFillLinkedin} w={6} h={6} />}>
                @DanielCG
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://dev.to/danielcgilibert" isExternal>
              <Button
                pl="5px"
                textUnderlineOffset="2"
                bg="transparent"
                leftIcon={<Icon as={FaDev} w={6} h={6} />}>
                @danielcgilibert
              </Button>
            </Link>
          </ListItem>
        </List>
      </Stack>
    </Box>
  )
}

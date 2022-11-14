import { Icon } from '@chakra-ui/icons'
import { Box, Button, Link, List, ListItem, Stack } from '@chakra-ui/react'
import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { TitleSection } from './title-section'

export const Social = () => {
  return (
    <Box as="section">
      <TitleSection title="Webs" />
      <Stack spacing="1" ml={{ base: '5', md: '0' }} color="colors.100">
        <List spacing={3}>
          <ListItem>
            <Link href="https://chakra-ui.com" isExternal>
              <Button
                w="25%"
                bg="transparent"
                leftIcon={<Icon as={AiFillGithub} w={6} h={6} />}>
                @DanielCG
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://chakra-ui.com" isExternal>
              <Button
                w="25%"
                textUnderlineOffset="2"
                bg="transparent"
                leftIcon={<Icon as={AiFillLinkedin} w={6} h={6} />}>
                @DanielCG
              </Button>
            </Link>
          </ListItem>
        </List>
      </Stack>
    </Box>
  )
}

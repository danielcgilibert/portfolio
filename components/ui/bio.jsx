import { CalendarIcon } from '@chakra-ui/icons'
import { Box, List, ListIcon, ListItem, Stack } from '@chakra-ui/react'
import React from 'react'
import { TitleSection } from './title-section'

export const Bio = () => {
  return (
    <Box as="section">
      <TitleSection title="Bio" />
      <Stack spacing="2">
        <List spacing={4}>
          <ListItem>
            <ListIcon as={CalendarIcon} color="green.200" />
            <Box fontWeight="bold" as="span" mr="4">
              2021 - 2022
            </Box>
            Desarrollador Front-End en Bengala Spain
          </ListItem>
          <ListItem>
            <ListIcon as={CalendarIcon} color="green.200" />
            <Box fontWeight="bold" as="span" mr="4">
              2021 - 2021
            </Box>
            Desarrollador Back-End en Acrono Sistemas Inteligentes SL
          </ListItem>
          <ListItem>
            <ListIcon as={CalendarIcon} color="green.200" />
            <Box fontWeight="bold" as="span" mr="4">
              2019 - 2019
            </Box>
            Help Desk en Accenture
          </ListItem>
        </List>
      </Stack>
    </Box>
  )
}

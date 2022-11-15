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
            Quidem, ipsam eum fugit earum
          </ListItem>
          <ListItem>
            <ListIcon as={CalendarIcon} color="green.200" />
            <Box fontWeight="bold" as="span" mr="4">
              2021 - 2022
            </Box>
            Quidem, ipsam eum fugit earum
          </ListItem>
          <ListItem>
            <ListIcon as={CalendarIcon} color="green.200" />
            <Box fontWeight="bold" as="span" mr="4">
              2016 - 2022
            </Box>
            Quidem, ipsam eum fugit earum
          </ListItem>
          <ListItem>
            <ListIcon as={CalendarIcon} color="green.200" />
            <Box fontWeight="bold" as="span" mr="4">
              2018 - 2019
            </Box>
            Quidem, ipsam illum quis sed voluptatum quae eum fugit
          </ListItem>
        </List>
      </Stack>
    </Box>
  )
}

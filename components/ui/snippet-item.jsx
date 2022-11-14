import { GridItem, Text } from '@chakra-ui/react'
import React from 'react'

export const SnippetItem = ({ title }) => {
  return (
    <GridItem
      borderLeft="2px"
      bg="#403d3933"
      borderColor="colors.700"
      rounded="md"
      p="2"
      ml="0"
      select
      _hover={{ bg: 'colors.600', borderColor: 'white' }}>
      <Text fontSize="lg">{title}</Text>
    </GridItem>
  )
}

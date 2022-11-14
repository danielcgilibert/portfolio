import { Text } from '@chakra-ui/react'
import React from 'react'

export const TitleSection = ({ title }) => {
  return (
    <Text
      fontSize="2xl"
      textDecoration="underline"
      mb="20px"
      fontWeight="bold"
      textDecorationThickness="6px"
      css={{
        '&::first-letter': {
          fontSize: '2rem',
        },
      }}
      textUnderlineOffset="10px"
      textDecorationColor="colors.600">
      {title}
    </Text>
  )
}

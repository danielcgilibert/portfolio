import { Box, Flex, Icon, Link, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'

export const CardProject = ({
  project: { name, cover, hrefCode, hrefWeb, desc },
}) => {
  return (
    <Box
      as="article"
      border="1px"
      borderColor="colors.700"
      maxW="md"
      p="6"
      borderRadius="1rem"
      transition="ease-in-out 0.1s">
      <Flex flexDir="column" justify="space-between" align="center" gap="2">
        <Box>
          <Image
            style={{ borderRadius: '0.5rem' }}
            width={300}
            height={300}
            src={`/${cover}.jpg`}
            alt="daniel"
          />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          w="100%"
          minHeight="150px"
          textAlign="center">
          <Box as="header">
            <Text fontWeight="bold" fontSize="2xl">
              {name}
            </Text>
            <Text>{desc}</Text>
          </Box>

          <Flex mt="2" flexDir="row" justify="space-around" align="center">
            <Link
              sx={{ display: 'flex', gap: '5px' }}
              href={hrefCode}
              isExternal>
              <Text>Code</Text>
              <Icon as={AiFillGithub} w={6} h={6} color="colors.100" />
            </Link>

            <Link
              sx={{ display: 'flex', gap: '5px' }}
              opacity={hrefWeb ? '1' : '0.2'}
              href={hrefWeb}
              isExternal
              pointerEvents={hrefWeb ? 'inherit' : 'none'}>
              {hrefWeb ? <Text>Web</Text> : <Text>Sin web</Text>}
              <Icon as={AiOutlineLink} w={6} h={6} color="colors.100" />
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

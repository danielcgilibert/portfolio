import {
  CloseIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  MoonIcon,
  SunIcon,
} from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Divider,
  Icon,
  keyframes,
  Link as LinkChakra,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import {
  AiFillCode,
  AiFillFileText,
  AiFillHome,
  AiFillInfoCircle,
  AiFillProject,
} from 'react-icons/ai'

const animationKeyframes = keyframes`
0% { transform: rotate( 0.0deg) }
   10% { transform: rotate(14.0deg) }  /* The following five values can be played with to make the waving more or less extreme */
   20% { transform: rotate(-8.0deg) }
   30% { transform: rotate(14.0deg) }
   40% { transform: rotate(-4.0deg) }
   50% { transform: rotate(10.0deg) }
   60% { transform: rotate( 0.0deg) }  /* Reset for the last half to pause */
  100% { transform: rotate( 0.0deg) }`

const animation = `${animationKeyframes} 3s ease-in-out infinite`
export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const bgColor = useColorModeValue('colors.200', 'colors.900')
  const color = useColorModeValue('colors.900', 'colors.100')

  return (
    <>
      <Box
        position="fixed"
        w="100%"
        mx={'auto'}
        as="nav"
        css={{ backdropFilter: 'blur(20px)' }}
        zIndex={2}
        pt="5px"
        px={{ base: '20px', md: '40px' }}>
        <Container
          display="flex"
          p={2}
          maxW="container.md"
          wrap="wrap"
          align="center"
          alignItems="center"
          justifyContent="space-between">
          <Link href="/">
            <Text fontSize="xl">
              <Box
                as={motion.span}
                mr="2"
                display="inline-flex"
                animation={animation}>
                👋
              </Box>
              Daniel
            </Text>
          </Link>

          <Stack direction={'row'} spacing={3}>
            <Button
              border="2px"
              color={color}
              bg={bgColor}
              onClick={toggleColorMode}>
              {colorMode === 'light' ? (
                <MoonIcon w={5} h={5} color="colors.100" />
              ) : (
                <SunIcon color="colors.100" w={5} h={5} />
              )}
            </Button>

            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton
                    as={Button}
                    variant={'link'}
                    cursor={'pointer'}
                    border="2px"
                    color={color}
                    w="100%"
                    minW={0}>
                    {isOpen ? (
                      <CloseIcon w={6} h={6} />
                    ) : (
                      <HamburgerIcon w={6} h={6} />
                    )}
                  </MenuButton>

                  <MenuList alignItems={'center'}>
                    <Link href="/">
                      <MenuItem flex gap="2">
                        <Icon as={AiFillHome} color="colors.100" />
                        Home
                      </MenuItem>
                    </Link>
                    <Link href="/projects">
                      <MenuItem flex gap="2">
                        <Icon as={AiFillProject} color="colors.100" />
                        Projects
                      </MenuItem>
                    </Link>
                    <Link href="/snippets">
                      <MenuItem flex gap="2">
                        <Icon as={AiFillCode} color="colors.100" />
                        Snippets
                      </MenuItem>
                    </Link>
                    <Link href="/blog">
                      <MenuItem flex gap="2">
                        <Icon as={AiFillFileText} color="colors.100" />
                        Blog
                      </MenuItem>
                    </Link>
                    <Divider mt="2" />
                    <LinkChakra href="https://status.danielcg.dev/" isExternal>
                      <MenuItem flex gap="2">
                        <Icon as={AiFillInfoCircle} color="colors.100" />
                        Status <ExternalLinkIcon mx="2px" />
                      </MenuItem>
                    </LinkChakra>
                  </MenuList>
                </>
              )}
            </Menu>
          </Stack>
        </Container>
      </Box>
    </>
  )
}

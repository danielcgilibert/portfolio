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
import Link from 'next/link'
import React from 'react'
import {
  AiFillCode,
  AiFillFileText,
  AiFillHome,
  AiFillInfoCircle,
  AiFillProject,
} from 'react-icons/ai'

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const bgColor = useColorModeValue('colors.200', 'colors.900')
  const color = useColorModeValue('colors.900', 'colors.100')

  return (
    <>
      <Box
        position="fixed"
        as="nav"
        w="100%"
        mx={'auto'}
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
          <Text fontSize="xl">👋 Daniel</Text>

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

                  <MenuList bgColor={bgColor} alignItems={'center'}>
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

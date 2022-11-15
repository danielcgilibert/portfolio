import {
  Flex,
  Grid,
  Icon,
  Link,
  SlideFade,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { Layout } from '../components/layouts/layout'
import { CardProject } from '../components/ui/card-project'
import { TitleSection } from '../components/ui/title-section'
import { projects } from '../db/projects'

export default function ProjectsPage() {
  const { isOpen, onToggle } = useDisclosure()
  const bgColor = useColorModeValue('colors.200', 'colors.300')

  return (
    <Layout title="Projects">
      <TitleSection title="Projects" />
      <SlideFade in={true}>
        <Grid
          as="section"
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
          gap="4"
          placeItems="center"
          alignContent="center">
          {projects.map(project => (
            <CardProject key={project.name} project={project} />
          ))}
        </Grid>
        <Flex
          rounded="lg"
          py="3"
          bg={bgColor}
          mt="5"
          gap="2"
          justifyContent="center">
          <Icon as={AiFillGithub} w={6} h={6} />
          <Link href="https://chakra-ui.com" isExternal>
            Más proyectos en GitHub
          </Link>
        </Flex>
      </SlideFade>
    </Layout>
  )
}

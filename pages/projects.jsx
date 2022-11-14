import { Grid, SlideFade, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../components/layouts/layout'
import { CardProject } from '../components/ui/card-project'
import { TitleSection } from '../components/ui/title-section'
import { projects } from '../db/projects'

export default function ProjectsPage() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Layout title="Projects">
      <TitleSection title="Projects" />
      <SlideFade in={true}>
        <Grid
          as="section"
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
          gap="4">
          {projects.map(project => (
            <CardProject key={project.name} project={project} />
          ))}
        </Grid>
      </SlideFade>
    </Layout>
  )
}

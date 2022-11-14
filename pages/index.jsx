import { Grid, SlideFade } from '@chakra-ui/react'
import { Layout } from '../components/layouts/layout'
import { About } from '../components/ui/about'
import { Bio } from '../components/ui/bio'
import { Presentation } from '../components/ui/presentation'
import { Social } from '../components/ui/social'

export default function Home() {
  return (
    <Layout title="Home">
      <SlideFade in={true} offsetY="-20px">
        <Grid templateColumns="repeat(1, 1fr)" gap={6}>
          <Presentation />
          <About />
          <Bio />
          <Social />
        </Grid>
      </SlideFade>
    </Layout>
  )
}

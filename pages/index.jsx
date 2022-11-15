import { Grid, SlideFade } from '@chakra-ui/react'
import { Layout } from '../components/layouts/layout'
import { About } from '../components/ui/about'
import { Bio } from '../components/ui/bio'
import { Presentation } from '../components/ui/presentation'
import { Social } from '../components/ui/social'
import { Stast } from '../components/ui/stast'

export default function Home({ repositories, totalContributions }) {
  return (
    <Layout title="Home">
      <SlideFade in={true} offsetY="-20px">
        <Grid templateColumns="repeat(1, 1fr)" gap={10}>
          <Stast
            repositories={repositories}
            totalContributions={totalContributions}
          />
          <Presentation />
          <About />
          <Bio />
          <Social />
        </Grid>
      </SlideFade>
    </Layout>
  )
}

export async function getStaticProps(context) {
  try {
    const bearer = `Bearer ${process.env.ENV_GITHUBTOKEN}`

    const response = await fetch(
      'https://api.github.com/users/danielcgilibert/repos',
      {
        method: 'GET',
        withCredentials: true,
        credentials: 'include',
        headers: {
          Authorization: bearer,
          'Content-Type': 'application/json',
        },
      }
    )

    const responseContribu = await fetch(
      'https://github-contributions-api.deno.dev/danielcgilibert.json'
    )

    const { totalContributions } = await responseContribu.json()
    const repositories = await response.json()

    return {
      props: { repositories: repositories.length, totalContributions },
    }
  } catch (error) {
    console.log(error)
  }
}

import { Grid, SlideFade } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { Layout } from '../components/layouts/layout'
import { SnippetItem } from '../components/ui/snippet-item'
import { TitleSection } from '../components/ui/title-section'
import { getAllFilesMetadata } from '../lib/mdx'

export default function SnippetsPage({ snippets }) {
  return (
    <Layout title="Snippets">
      <TitleSection title="Snippets" />
      <SlideFade in={true}>
        <Grid templateColumns="repeat(1, 1fr)" gap={5} className="snippet-grid">
          {snippets.map(snippet => (
            <Link key={snippet.slug} href={`snippet/${snippet.slug}`}>
              <SnippetItem title={snippet.title} />
            </Link>
          ))}
        </Grid>
      </SlideFade>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const snippets = await getAllFilesMetadata()
  return {
    props: { snippets },
  }
}

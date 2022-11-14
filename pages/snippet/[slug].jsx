import { MDXRemote } from 'next-mdx-remote'
import React from 'react'
import { Layout } from '../../components/layouts/layout'
import MDXComponents from '../../components/mdx/MDXComponents'
import { getFileBySlug, getFiles } from '../../lib/mdx'
export default function Snippet({ source, frontmatter }) {
  return (
    <Layout title={`${frontmatter.title}`}>
      <MDXRemote {...source} components={MDXComponents} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const snippets = await getFiles()
  const paths = snippets.map(snippet => ({
    params: {
      slug: snippet.replace(/\.mdx/, ''),
    },
  }))

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFileBySlug(params.slug)

  return {
    props: {
      source,
      frontmatter: {
        slug: params.snippet,
        ...frontmatter,
      },
    },
  }
}

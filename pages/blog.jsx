import React from 'react'
import { Layout } from '../components/layouts/layout'
import { TitleSection } from '../components/ui/title-section'

export default function BlogPage() {
  return (
    <Layout title="Blog">
      <TitleSection title="Blog" />
      <h1>Sin entradas...</h1>
    </Layout>
  )
}

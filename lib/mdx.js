import fs from 'fs'
import matter from 'gray-matter'
import mdxPrism from 'mdx-prism'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeAutolinkHeadings from 'remark-autolink-headings'
import remarkGfm from 'remark-gfm'
import remarkSlug from 'remark-slug'
const root = process.cwd()
export const getFiles = () => {
  return fs.readdirSync(path.join(root, 'data'))
}
export const getFileBySlug = async slug => {
  const mdxSource = fs.readFileSync(
    path.join(root, 'data', `${slug}.mdx`),
    'utf-8'
  )
  const { data, content } = await matter(mdxSource)
  const source = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [rehypeAutolinkHeadings, remarkSlug, remarkGfm],
      rehypePlugins: [rehypeCodeTitles, mdxPrism],
    },
  })

  return {
    source,
    frontmatter: {
      slug,
      ...data,
    },
  }
}

export const getAllFilesMetadata = () => {
  const files = getFiles()
  return files.reduce((allPosts, postSlug) => {
    const mdxSource = fs.readFileSync(
      path.join(root, 'data', postSlug),
      'utf-8'
    )
    const { data } = matter(mdxSource)
    return [{ ...data, slug: postSlug.replace('.mdx', '') }, ...allPosts]
  }, [])
}

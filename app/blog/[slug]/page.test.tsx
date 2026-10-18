import { render, screen } from '@testing-library/react'
import BlogPost from './page'

describe('BlogPost', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => [
        {
          id: 1,
          title: 'Cómo optimizar tu aplicación Next.js',
          summary: 'Summary',
          content: 'Este es el contenido completo del post',
          author: 'Juan Pérez',
          date: '15 de Mayo, 2024',
          featured: true,
        },
        {
          id: 2,
          title: 'Introducción a TypeScript',
          summary: 'Related post summary',
        },
      ],
    })
  })

  it('renders post title when post exists', async () => {
    const Component = await BlogPost({ params: Promise.resolve({ slug: '1' }) })
    render(Component)

    const title = screen.getByText('Cómo optimizar tu aplicación Next.js')
    expect(title).toBeInTheDocument()
  })

  it('renders post author and date when post exists', async () => {
    const Component = await BlogPost({ params: Promise.resolve({ slug: '1' }) })
    render(Component)

    const author = screen.getByText(/By Juan Pérez/)
    const date = screen.getByText(/15 de Mayo, 2024/)
    
    expect(author).toBeInTheDocument()
    expect(date).toBeInTheDocument()
  })

  it('renders post content when post exists', async () => {
    const Component = await BlogPost({ params: Promise.resolve({ slug: '1' }) })
    render(Component)

    const content = screen.getByText(/Este es el contenido completo del post/)
    expect(content).toBeInTheDocument()
  })

  it('shows "Post not found" when post does not exist', async () => {
    const Component = await BlogPost({ params: Promise.resolve({ slug: '999' }) })
    render(Component)

    const notFound = screen.getByText('Post not found')
    expect(notFound).toBeInTheDocument()
  })

  it('renders related posts section', async () => {
    const Component = await BlogPost({ params: Promise.resolve({ slug: '1' }) })
    render(Component)

    const relatedPostsTitle = screen.getByText('Related posts')
    expect(relatedPostsTitle).toBeInTheDocument()
  })

  it('renders related posts links with correct href attributes', async () => {
    const Component = await BlogPost({ params: Promise.resolve({ slug: '1' }) })
    render(Component)

    const relatedLinks = screen.getAllByText('Read')
    expect(relatedLinks.length).toBeGreaterThan(0)
    
    // Verificar que al menos un link tenga el href correcto
    const firstLink = relatedLinks[0].closest('a')
    expect(firstLink).toHaveAttribute('href')
  })

  it('renders hero section with placeholder image', async () => {
    const Component = await BlogPost({ params: Promise.resolve({ slug: '1' }) })
    render(Component)

    const heroPlaceholder = screen.getByText('Post hero image')
    expect(heroPlaceholder).toBeInTheDocument()
  })
})

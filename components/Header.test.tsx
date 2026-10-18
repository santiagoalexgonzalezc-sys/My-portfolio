import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('renders the logo with correct text', () => {
    render(<Header />)
    const logo = screen.getByText("Santiago's Portafolio")
    expect(logo).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Header />)
    
    const homeLink = screen.getByText('Home')
    const aboutLink = screen.getByText('About')
    const blogLink = screen.getByText('Blog')

    expect(homeLink).toBeInTheDocument()
    expect(aboutLink).toBeInTheDocument()
    expect(blogLink).toBeInTheDocument()
  })

  it('navigation links have correct href attributes', () => {
    render(<Header />)
    
    const homeLink = screen.getByText('Home')
    const aboutLink = screen.getByText('About')
    const blogLink = screen.getByText('Blog')

    expect(homeLink.closest('a')).toHaveAttribute('href', '/')
    expect(aboutLink.closest('a')).toHaveAttribute('href', '/about')
    expect(blogLink.closest('a')).toHaveAttribute('href', '/blog')
  })

  it('renders with correct semantic structure', () => {
    render(<Header />)
    
    // Verifica que use <header> con role banner
    const header = screen.getByRole('banner')
    expect(header).toBeInTheDocument()
    
    // Verifica que use <nav> con role navigation
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
    
    // Verifica que los links sean accesibles
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(6) // Logo + 5 navigation links
  })
})

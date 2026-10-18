import { render, screen } from '@testing-library/react';
import ProjectDetails from './[slug]/page';
import Projects from './page';

const featuredProject = {
  id: 1,
  title: '7aCoMusic',
  summary: 'A Colombian music website.',
  content: 'Created in Grade 8 as an interactive music project.',
  technologies: ['HTML', 'CSS', 'JavaScript'],
  featured: true,
};

describe('Projects', () => {
  beforeEach(() => {
    Object.defineProperty(globalThis, 'fetch', {
      configurable: true,
      value: jest.fn().mockResolvedValue({
        ok: true,
        json: async () => [featuredProject],
      }),
    });
  });

  it('links project previews to their detail pages', () => {
    render(<Projects />);

    expect(
      screen.getByRole('link', { name: 'View 7aCoMusic project details' }),
    ).toHaveAttribute('href', '/projects/1');
    expect(screen.getAllByText('Read more')).toHaveLength(4);
  });

  it('renders project details and a link back to the projects page', async () => {
    const page = await ProjectDetails({
      params: Promise.resolve({ slug: '1' }),
    });
    render(page);

    expect(screen.getByRole('heading', { name: '7aCoMusic' })).toBeInTheDocument();
    expect(screen.getByText('A Colombian music website.')).toBeInTheDocument();
    expect(screen.getByText('Created in Grade 8 as an interactive music project.')).toBeInTheDocument();
    expect(screen.getByText('Technologies')).toBeInTheDocument();
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Back to projects' })).toHaveAttribute(
      'href',
      '/projects',
    );
  });
});

 import Link from 'next/link';

interface Post {
  id: number;
  title: string;
  summary: string;
  featured?: boolean;
}

const mockPosts: Post[] = [
  {
    id: 1,
    title: 'Cómo optimizar tu aplicación Next.js',
    summary: 'Aprende las mejores prácticas para mejorar el rendimiento de tus aplicaciones Next.js con técnicas avanzadas de optimización.',
    featured: true,
  },
  {
    id: 2,
    title: 'Introducción a TypeScript',
    summary: 'Guía completa para comenzar con TypeScript y mejorar la calidad de tu código JavaScript.',
  },
  {
    id: 3,
    title: 'Tailwind CSS: Guía práctica',
    summary: 'Descubre cómo utilizar Tailwind CSS para crear interfaces modernas y responsivas rápidamente.',
  },
  {
    id: 4,
    title: 'Testing en React',
    summary: 'Estrategias y herramientas para escribir tests efectivos en tus aplicaciones React.',
  },
  {
    id: 5,
    title: 'State Management con Zustand',
    summary: 'Una alternativa ligera y sencilla a Redux para manejar el estado en aplicaciones React.',
  },
  {
    id: 6,
    title: 'Deploy de Next.js en Vercel',
    summary: 'Paso a paso para desplegar tu aplicación Next.js en Vercel con configuración optimizada.',
  },

  {
    id: 7,
    title: 'TypeScript: Guía completa',
    summary: 'Aprende TypeScript desde cero hasta conceptos avanzados.',
  }
];

export default function Blog() {
  const featuredPost = mockPosts.find((post) => post.featured);
  const regularPosts = mockPosts.filter((post) => !post.featured);
  
  return (
    <div className="flex flex-col">
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section - Featured Post */}
        {featuredPost && (
          <section className="max-w-6xl mx-auto px-4 py-16">
            <div className="bg-[#687B55] text-white p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">Featured image</span>
                </div>
                <div>
                  <h1 className="text-3xl font-bold mb-4 text-center">{featuredPost.title}</h1>
                  <p className="mb-6 text-center">{featuredPost.summary}</p>
                  <Link
                    href={`/blog/${featuredPost.id}`}
                    className="inline-block px-6 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors border-2 border-black text-lg font-semibold text-center w-full"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Posts Grid */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Latest posts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {regularPosts.map((post) => (
              <div key={post.id} className="bg-[#687B55] text-white p-6 rounded-lg">
                <div className="w-full aspect-square bg-gray-200 dark:bg-gray-800 rounded mb-4 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">Thumbnail</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">{post.title}</h3>
                <p className="mb-4 text-center">{post.summary}</p>
                <Link
                  href={`/blog/${post.id}`}
                  className="hover:underline text-lg font-semibold text-center block w-full"
                >
                  Read
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

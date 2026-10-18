interface Project {
  id: number;
  title: string;
  description: string;
  featured?: boolean;
}

const mockProjects: Project[] = [
  {
    id: 1,
    title: 'Proyecto E-commerce',
    description: 'Plataforma de comercio electrónico con Next.js y Stripe.',
    featured: true,
  },
  {
    id: 2,
    title: 'Dashboard Analytics',
    description: 'Panel de control con visualización de datos en tiempo real.',
  },
  {
    id: 3,
    title: 'App de Tareas',
    description: 'Aplicación de gestión de tareas con React y TypeScript.',
  },
  {
    id: 4,
    title: 'Portfolio Personal',
    description: 'Sitio web personal con diseño moderno y responsivo.',
  }
];

export default function Projects() {
  const featuredProject = mockProjects.find((project) => project.featured);
  const otherProjects = mockProjects.filter((project) => !project.featured);
  
  return (
    <div className="flex flex-col">
      {/* Main Content */}
      <main className="flex-1">
        {/* Featured Project */}
        {featuredProject && (
          <section className="max-w-6xl mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Project preview</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-4 text-center">{featuredProject.title}</h1>
                <p className="text-gray-600 dark:text-gray-400">{featuredProject.description}</p>
              </div>
            </div>
          </section>
        )}

        {/* Other Projects Grid */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Other Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project) => (
              <div key={project.id} className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <div className="w-full aspect-square bg-gray-200 dark:bg-gray-800 rounded mb-4 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">Project preview</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
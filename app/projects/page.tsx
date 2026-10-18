import Link from 'next/link';
import { projects } from './data';

export default function Projects() {
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);
  
  return (
    <div className="flex flex-col">
      {/* Main Content */}
      <main className="flex-1">
        {/* Featured Project */}
        {featuredProject && (
          <section className="max-w-6xl mx-auto px-4 py-16">
            <div className="bg-[#687B55] text-white p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <Link
                  href={`/projects/${featuredProject.id}`}
                  aria-label={`View ${featuredProject.title} project details`}
                  className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center"
                >
                  <span className="text-gray-500 dark:text-gray-400">Project preview</span>
                </Link>
                <div>
                  <h1 className="text-3xl font-bold mb-4 text-center">{featuredProject.title}</h1>
                  <p>{featuredProject.description}</p>
                  <Link
                    href={`/projects/${featuredProject.id}`}
                    className="mt-4 block text-center font-semibold hover:underline"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Other Projects Grid */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Other Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project) => (
              <div key={project.id} className="bg-[#687B55] text-white p-6 rounded-lg">
                <Link
                  href={`/projects/${project.id}`}
                  aria-label={`View ${project.title} project details`}
                  className="w-full aspect-square bg-gray-200 dark:bg-gray-800 rounded mb-4 flex items-center justify-center"
                >
                  <span className="text-gray-500 dark:text-gray-400">Project preview</span>
                </Link>
                <h3 className="text-xl font-bold mb-2 text-center">{project.title}</h3>
                <p>{project.description}</p>
                <Link
                  href={`/projects/${project.id}`}
                  className="mt-4 block text-center font-semibold hover:underline"
                >
                  Read more
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
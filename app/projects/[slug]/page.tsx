import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Project {
  id: number;
  title: string;
  summary: string;
  content: string;
  technologies: string[];
}

async function getProjects(): Promise<Project[]> {
  const response = await fetch('http://localhost:3001/projects');
  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }

  return response.json();
}

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projects = await getProjects();
  const project = projects.find((item) => String(item.id) === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex-1">
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-[#687B55] text-white p-8 rounded-lg">
          <div className="w-full aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg mb-8 flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400">Project preview</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">{project.title}</h1>
          <p className="mb-4 text-center">{project.summary}</p>
          <p className="text-lg leading-relaxed">{project.content}</p>
          <h2 className="mt-8 mb-3 text-xl font-bold">Technologies</h2>
          <ul className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <li key={technology} className="rounded bg-black/20 px-3 py-1">
                {technology}
              </li>
            ))}
          </ul>
          <Link
            href="/projects"
            className="mt-8 inline-block font-semibold hover:underline"
          >
            Back to projects
          </Link>
        </div>
      </section>
    </main>
  );
}

export interface Project {
  id: number;
  title: string;
  description: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: '7aCoMusic',
    description: 'One of my first web development projects, created in Grade 8 for a music assignment about Colombian music. Built with HTML, CSS, and JavaScript, 7aCoMusic was my way of turning a school assignment into an interactive website.My teacher was surprised by my approach and impressed with the result, awarding me a 100% grade. ',
    featured: true,
  },
  {
    id: 2,
    title: 'Pokepon',
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
  },
];

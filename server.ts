interface Post {
  id: number;
  title: string;
  summary: string;
  featured?: boolean;
  content?: string;
  author?: string;
  date?: string;
}

interface Project {
  id: number;
  title: string;
  summary: string;
  featured?: boolean;
  content: string;
  technologies: string[];
}

const mockPosts: Post[] = [
  {
    id: 1,
    title: 'Cómo optimizar tu aplicación Next.js',
    summary: 'Aprende las mejores prácticas para mejorar el rendimiento de tus aplicaciones Next.js con técnicas avanzadas de optimización.',
    content: 'Este es el contenido completo del post sobre cómo optimizar tu aplicación Next.js. Aquí se detallan técnicas como la optimización de imágenes, lazy loading de componentes, server-side rendering (SSR) vs static site generation (SSG), y el uso de la API de Next.js para rutas y datos. Se incluyen ejemplos de código y mejores prácticas para asegurar un rendimiento óptimo y una excelente experiencia de usuario.',
    author: 'Juan Pérez',
    date: '15 de Mayo, 2024',
    featured: true,
  },
  {
    id: 2,
    title: 'Introducción a TypeScript',
    summary: 'Guía completa para comenzar con TypeScript y mejorar la calidad de tu código JavaScript.',
    content: 'En esta guía, exploraremos los fundamentos de TypeScript, desde la configuración inicial hasta tipos avanzados, interfaces, clases y genéricos. Aprenderás a escribir código más robusto y mantenible, aprovechando las ventajas del tipado estático en tus proyectos JavaScript.',
    author: 'María García',
    date: '10 de Mayo, 2024',
  },
  {
    id: 3,
    title: 'Tailwind CSS: Guía práctica',
    summary: 'Descubre cómo utilizar Tailwind CSS para crear interfaces modernas y responsivas rápidamente.',
    content: 'Tailwind CSS es un framework de utilidades que te permite construir diseños personalizados sin salir de tu HTML. En este artículo, aprenderás los conceptos básicos, cómo configurar tu proyecto, y las mejores prácticas para mantener tu código limpio y mantenible.',
    author: 'Carlos López',
    date: '5 de Mayo, 2024',
  },
  {
    id: 4,
    title: 'Testing en React',
    summary: 'Estrategias y herramientas para escribir tests efectivos en tus aplicaciones React.',
    content: 'El testing es fundamental para garantizar la calidad de tu software. Aquí exploramos Jest, React Testing Library, y estrategias para escribir tests unitarios, de integración y end-to-end que te darán confianza en tu código.',
    author: 'Ana Martínez',
    date: '1 de Mayo, 2024',
  },
  {
    id: 5,
    title: 'State Management con Zustand',
    summary: 'Una alternativa ligera y sencilla a Redux para manejar el estado en aplicaciones React.',
    content: 'Zustand es una biblioteca de gestión de estado pequeña, rápida y escalable. Aprende cómo simplificar tu código reemplazando Redux con esta solución más moderna y fácil de usar.',
    author: 'Pedro Sánchez',
    date: '25 de Abril, 2024',
  },
  {
    id: 6,
    title: 'Deploy de Next.js en Vercel',
    summary: 'Paso a paso para desplegar tu aplicación Next.js en Vercel con configuración optimizada.',
    content: 'Vercel es la plataforma ideal para desplegar aplicaciones Next.js. En este tutorial, aprenderás a configurar tu proyecto, optimizar el build, y establecer un flujo de trabajo de CI/CD automatizado.',
    author: 'Laura Rodríguez',
    date: '20 de Abril, 2024',
  },
  {
    id: 7,
    title: 'TypeScript: Guía completa',
    summary: 'Aprende TypeScript desde cero hasta conceptos avanzados.',
    content: 'TypeScript es un superconjunto de JavaScript que añade tipado estático. Este tutorial cubre desde los conceptos básicos hasta patrones avanzados como generics, decorators, y tipos condicionales.',
    author: 'Miguel Torres',
    date: '15 de Abril, 2024',
  }
];

const mockProjects: Project[] = [
  {
    id: 1,
    title: '7aCoMusic',
    summary: 'An interactive website introducing visitors to the music and culture of Colombia.',
    featured: true,
    content: 'One of my first web development projects, created in Grade 8 for a music assignment about Colombian music. Built with HTML, CSS, and JavaScript, 7aCoMusic was my way of turning a school assignment into an interactive website.My teacher was surprised by my approach and impressed with the result, awarding me a 100% grade. ',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 2,
    title: 'Dashboard Analytics',
    summary: 'A sample analytics dashboard for tracking activity and reviewing key metrics.',
    content: 'This dashboard concept organizes important business metrics into a clear overview. It includes summary cards, charts for comparing activity over time, and a responsive layout that keeps the information easy to scan on smaller screens.',
    technologies: ['React', 'TypeScript', 'Chart.js'],
  },
  {
    id: 3,
    title: 'App de Tareas',
    summary: 'A task manager concept for organizing daily work into manageable steps.',
    content: 'The task manager lets users capture tasks, mark work as complete, and keep track of what still needs attention. Its simple interface is designed to make everyday planning straightforward, with separate views for active and completed tasks.',
    technologies: ['React', 'TypeScript', 'CSS'],
  },
  {
    id: 4,
    title: 'Portfolio Personal',
    summary: 'A responsive portfolio for presenting projects, writing, and contact information.',
    content: 'This portfolio brings project highlights, blog posts, and personal information together in one place. The design uses reusable page sections and responsive layouts so visitors can explore the work on desktop and mobile devices.',
    technologies: ['Next.js', 'React', 'Tailwind CSS'],
  },
];

const server = Bun.serve({
  port: 3001,
  routes: {
    "/posts": {
      GET: () => {
        return Response.json(mockPosts);
      },
    },
    "/projects": {
      GET: () => {
        return Response.json(mockProjects);
      },
    },
  },
  fetch(req) {
    return new Response("Not Found", { status: 404 });
  },
});

console.log(`Servidor Bun escuchando en ${server.url}`);

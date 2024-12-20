interface Project {
  id: number;
  title: string;
  description: string;
  details: string;
  technologies: string[];
  image?: string;
  link?: string;
  demoUrl?: string;
  codeUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Protectora Huellas',
    image: '/src/assets/images/protectora-huellas.webp',
    description: 'Web de una protectora de animales',
    details:
      'Ofrece información sobre animales en adopción y contacto con el equipo de la protectora.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://huellas-protectora.vercel.app/',
    demoUrl: 'https://tuportfolio.com',
    codeUrl: 'https://github.com/efe13dev/huellas-nextjs'
  },
  {
    id: 2,
    title: 'App Meetups',
    image: '/src/assets/project-2.webp',
    description: 'Descripción breve del proyecto 2',
    details: 'Detalles completos del proyecto 2',
    technologies: ['React', 'Node.js', 'MongoDB'],
    link: 'https://proyecto2.com'
  },
  {
    id: 3,
    title: 'App Gestion Huellas',
    image: '/src/assets/projecto-3.png',
    description: 'Descripción breve del proyecto 3',
    details: 'Detalles completos del proyecto 3',
    technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    link: 'https://proyecto3.com'
  },
  {
    id: 4,
    title: 'App Que Comemos Hoy',
    image: '/src/assets/project-4.webp',
    description: 'Aplicación de chat con inteligencia artificial',
    details:
      'Una aplicación web que utiliza GPT-4 para mantener conversaciones inteligentes con los usuarios. Incluye características como historial de chat, diferentes personalidades de AI y exportación de conversaciones.',
    technologies: [
      'Next.js',
      'OpenAI API',
      'Prisma',
      'PostgreSQL',
      'WebSocket'
    ],
    link: 'https://aichat.com'
  },
  {
    id: 5,
    title: 'Juego De Memoria',
    image: '/src/assets/project-5.webp',
    description: 'Panel de control para tienda online',
    details:
      'Dashboard completo para gestionar una tienda online, con análisis en tiempo real, gestión de inventario, pedidos y clientes. Incluye gráficos interactivos y reportes personalizables.',
    technologies: [
      'React',
      'Redux',
      'Material-UI',
      'Chart.js',
      'Node.js',
      'Express'
    ],
    link: 'https://dashboard-demo.com'
  },
  {
    id: 6,
    title: 'Juego Tres en Raya',
    image: '/src/assets/project-6.webp',
    description: 'Aplicación de gestión de proyectos y tareas',
    details:
      'Herramienta colaborativa para la gestión de proyectos con características como Kanban boards, seguimiento de tiempo, asignación de tareas y generación de informes. Integración con GitHub y Slack.',
    technologies: ['Vue 3', 'Pinia', 'TailwindCSS', 'Supabase', 'TypeScript'],
    link: 'https://taskflow-app.com'
  }
];

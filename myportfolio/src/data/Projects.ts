export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Recos AI: The Recruitment Platform',
    description: 'An AI-powered platform designed to streamline the recruitment process. It helps recruiters analyze resumes, rank candidates, and make data-driven hiring decisions, saving time and improving efficiency. This is the core application dashboard.',
    imageUrl: '/Jobs.jpg', 
    techStack: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'Postgres',
      'Chart.js', 
    ],
    liveUrl: 'https://recos-jet.vercel.app/',
    githubUrl: 'https://github.com/akirachix/recos-frontend', 
  },
  {
    id: 2,
    title: 'Recos AI: Marketing Website',
    description: 'The official landing page for Recos AI. Designed to attract and inform potential users about the platform\'s features, benefits, and pricing through compelling visuals and clear calls-to-action.',
    imageUrl: '/Features.jpg', 
    techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion'], 
    liveUrl: 'https://recos-six.vercel.app/',
    githubUrl: 'https://github.com/akirachix/recos-informational-website', 
  },
  {
    id: 3,
    title: 'Recos AI: Technical Documentation',
    description: 'Comprehensive technical documentation for the Recos AI platform. Built for developers and API users, it includes detailed guides, API references, and code examples to facilitate integration.',
    imageUrl: '/Free_Laptop_Mockup 1.png', 
    techStack: ['Docusaurus', 'React', 'Markdown'], 
    liveUrl: 'https://jacquelinenyinawabagesera.github.io/Recos-Technical-Documentation/',
    githubUrl: 'https://github.com/yourusername/recos-docs', 
  },
  {
    id: 4,
    title: 'SafiGreens: E-Commerce Platform',
    description: 'A modern e-commerce platform for eco-friendly products. Features include product browsing, a dynamic shopping cart, user authentication, and a seamless checkout process.',
    imageUrl: '/Group 122.jpg', 
    techStack: [
      'HTML',
      'CSS',
    ],
    liveUrl: 'https://safigreeens.netlify.app/',
    githubUrl: 'https://github.com/akirachix/big-minds-informational', 
  },
  {
    id: 5,
    title: 'SafiGreens: Admin Dashboard',
    description: 'The administrative dashboard for SafiGreens. Allows store owners to manage products, view orders, track sales analytics, and handle customer data, providing full control over the e-commerce operations.',
    imageUrl: '/MacBook Pro 16_ - 5.jpg', 
    techStack: [
      'React.js',
      'Chart.js', 
      'PostgreSQL', 
    ],
    liveUrl: 'https://safiigreens-admins.vercel.app/',
    githubUrl: 'https://github.com/akirachix/bigminds-frontend', 
  },
    {
    id: 6,
    title: 'Movie Night — Watchlist Builder',
    description: 'A dynamic movie discovery app built with React that empowers film lovers to find and organize their next watch. Users can search for any movie, browse by genre, and add films to a personal, persistent watchlist. The app features a clean UI that displays rich movie details like posters, ratings, and summaries, all powered by the TMDb API.',
    imageUrl: '/movie.png', 
    techStack: [
      'React.js',
      'Tailwind CSS', 
      'TMDb API', 
      'localStorage',
    ],
    liveUrl: 'https://safimovies.netlify.app/',
    githubUrl: 'https://github.com/RigbeWeleslasie/Movie-Website', 
  },
];
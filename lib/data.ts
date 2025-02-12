import React from 'react';
import warofagesImg from '@/public/warofages.png';
import portfolioImg from '@/public/portfolio.png';
import wordanalyticsImg from '@/public/wordanalytics.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'DevOps Engineer @OMERS (Co-op)',
    location: 'Toronto, ON',
    description:
      'The start of my career as a software engineer! I Gained valuable insight into professional best practices and learned about deployments, testing, and data validation.',
    icon: React.createElement('img', {
      src: '/omers.png',
      alt: 'icon',
      style: { width: 50, height: 50, borderRadius: '50%' },
    }),
    date: 'Jan - Apr 2021',
  },
  {
    title: 'Software Developer @OpenText (Co-op)',
    location: 'Toronto, ON',
    description:
      'I worked on a full-stack case management application and learned about the intricacies of API development, from design to testing.',
    icon: React.createElement('img', {
      src: '/opentext.png',
      alt: 'icon',
      style: { width: 50, height: 50, borderRadius: '50%' },
    }),
    date: 'Sept - Dec 2021',
  },
  {
    title: 'Software Engineer @Zynga (Co-op)',
    location: 'Toronto, ON',
    description:
      "I joined an architecture team responsible for many of the services behind Zynga's hit games and learned about the importance of scalability, reliability, and fault-tolerance in complex systems.",
    icon: React.createElement('img', {
      src: '/zynga.png',
      alt: 'icon',
      style: { width: 50, height: 50, borderRadius: '50%' },
    }),
    date: 'May - Aug 2022',
  },
  {
    title: 'Software Engineer @PointClickCare (Co-op)',
    location: 'Toronto, ON',
    description:
      'I worked on the development of a pipeline to facilitate the conversion of medical data from SQL to an industry-standard format and learned about data privacy and application throughput.',
    icon: React.createElement('img', {
      src: '/pcc.png',
      alt: 'icon',
      style: { width: 50, height: 50, borderRadius: '50%' },
    }),
    date: 'Jan - Apr 2023',
  },
  {
    title: 'Fullstack Engineer @Immigr8 (Co-op)',
    location: 'Florida, Remote',
    description:
      'I joined a tight-knit team building a platform to streamline U.S. Visa Applications from the ground up and brought the project from infancy to client-ready.',
    icon: React.createElement('img', {
      src: '/immigr8.png',
      alt: 'icon',
      style: { width: 50, height: 50, borderRadius: '50%' },
    }),
    date: 'Jan - Apr 2024',
  },
  {
    title: 'Fullstack Engineer @PointClickCare (Co-op)',
    location: 'Toronto, ON',
    description:
      'I returned to PCC to further contribute to the medical care space and worked on the Practitioner Workspace application, facilitating the secure management of patient data and prescriptions.',
    icon: React.createElement('img', {
      src: '/pcc.png',
      alt: 'icon',
      style: { width: 50, height: 50, borderRadius: '50%' },
    }),
    date: 'Sept 2024 - Dec 2024',
  },
] as const;

export const projectsData = [
  {
    title: 'War of Ages',
    description:
      'Created a 2D PVP tower defense game based on the classic game Age of War',
    link: 'https://github.com/mlqh/War-of-Ages',
    tags: ['Java', 'Swing', 'AWT'],
    imageUrl: warofagesImg,
  },
  {
    title: 'Personal Portfolio',
    description:
      'Created a personal portfolio website to highlight and showcase projects',
    link: 'https://github.com/mlqh/portfolio',
    tags: ['TypeScript', 'React', 'Next.js', 'Tailwind'],
    imageUrl: portfolioImg,
  },
  {
    title: 'More to come...',
    description: 'Stay tuned for my next awesome project.',
    link: null,
    tags: ['PythonScript (?)', 'Java++ (?)'],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  'Java',
  'Spring Boot',
  'Python',
  'C/C++',
  'Kotlin',
  'JavaScript',
  'TypeScript',
  'React.js',
  'Next.js',
  'HTML',
  'CSS',
  'Tailwind',
  'PostgreSQL',
  'MySQL',
  'Git',
  'Docker',
  'AWS',
  'Azure',
  'Firebase',
  'Jenkins',
] as const;

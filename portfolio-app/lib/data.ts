import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
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
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
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
    icon: React.createElement(CgWorkAlt),
    date: 'Jan - Apr 2021',
  },
  {
    title: 'Software Developer @OpenText (Co-op)',
    location: 'Toronto, ON',
    description:
      'I worked on a full-stack case management application and learned about the intricacies of API development, from design to testing.',
    icon: React.createElement(CgWorkAlt),
    date: 'Sept - Dec 2021',
  },
  {
    title: 'Software Engineer @Zynga (Co-op)',
    location: 'Toronto, ON',
    description:
      "I joined an architecture team responsible for many of the services behind Zynga's hit games and learned about the importance of scalability, reliability, and fault-tolerance in complex systems.",
    icon: React.createElement(CgWorkAlt),
    date: 'May - Aug 2022',
  },
  {
    title: 'Software Engineer @PointClickCare (Co-op)',
    location: 'Toronto, ON',
    description:
      "I worked on the development of a pipeline to facilitate the conversion of medical data from SQL to an industry-standard format and learned about data privacy and application throughput.",
    icon: React.createElement(CgWorkAlt),
    date: 'Jan - Apr 2023',
  },
  {
    title: 'Fullstack Engineer @Immigr8 (Co-op)',
    location: 'Florida, Remote',
    description:
      "I joined a tight-knit team building a platform to streamline U.S. Visa Applications from the ground up and brought the project from infancy to client-ready.",
    icon: React.createElement(CgWorkAlt),
    date: 'Jan - Apr 2024',
  },
  {
    title: 'Software Engineer @PointClickCare',
    location: 'Toronto, ON',
    description:
      "I've returned to PCC to further explore the world of medical software and am currently working on a practitioner-facing platform to facilitate effective patient management.",
    icon: React.createElement(CgWorkAlt),
    date: 'Sept 2024 - Current',
  },
] as const;

export const projectsData = [
  {
    title: 'CorpComment',
    description:
      'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: corpcommentImg,
  },
  {
    title: 'rmtDev',
    description:
      'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: rmtdevImg,
  },
  {
    title: 'Word Analytics',
    description:
      'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
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
  'Git',
  'Docker',
  'AWS',
  'Firebase',
] as const;

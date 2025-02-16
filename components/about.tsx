'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      id='about'
      className='flex flex-col gap-3 max-w-[47rem] leading-8 sm:mb-40 mb-28 scroll-mt-30'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      ref={ref}
    >
      <SectionHeading>About me</SectionHeading>
      <p>
        I&apos;m currently in my 4th and final year of my{' '}
        <span className='font-medium'>Computer Engineering</span> degree at the{' '}
        <span className='font-medium'>University of Waterloo</span>, and I will
        be graduating in <span className='font-medium'>Spring 2025</span>.
        I&apos;ve completed <span className='underline'>6 co-op terms</span> with each 
        subsequent term developing my<span className='font-medium'>passion for programming</span>{' '}
        and curiousity towards the modern internet.
      </p>
      <p>
        During my co-ops, I&apos;ve worked on all aspects of{' '}
        <span className='font-medium'>full-stack web development</span>, from
        API and UI design and development, to testing and deployment, and
        monitoring and analytics.{' '}
        <span className='italic'>My favorite part of programming</span> is the
        problem-solving aspect. I <span className='underline'>love</span> the
        feeling of finally figuring out the solution to a bug after digging deep
        into your code, and will stop at nothing to find the optimal solution.
      </p>
      <p>
        My core stack is{' '}
        <span className='font-medium'>
          Java, Spring Boot, React.js, and PostgreSQL
        </span>
        . I am also familiar with Python, C/C++, Kotlin, and SQL. I am always
        looking to learn new technologies and stay on top of the ever-growing
        software development ecosystem. I am currently looking for a{' '}
        <span className='font-medium'>full-time position</span> as a software
        engineer starting <span className='font-medium'>Summer 2025</span>.
      </p>
      <p>
        <span className='italic'>When I&apos;m not coding</span>, I enjoy
        playing video games, listening to music, playing sports, and watching
        anime. I always try to stay curious and love learning about how the
        world around us works, especially all things tech related, whether it be
        PC&apos;s, cars, or mechanical keyboards, you name it!
        <span className='font-medium'></span>
      </p>
    </motion.section>
  );
}

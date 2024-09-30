'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      className='flex flex-col gap-3 max-w-[45rem] text-center leading-8 sm:mb-40 mb-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p>
        I'm currently in my 4th and final year of my{' '}
        <span className='font-medium'>Computer Engineering</span> degree at the{' '}
        <span className='font-medium'>University of Waterloo</span>, and I will
        be graduating in <span className='font-medium'>Spring 2025</span>. I've
        completed <span className='underline'>5 co-op placements</span> and am
        currently employed at my 6th, all of which have driven the growth of my
        passion for programming.
      </p>
      <p>
        During my co-ops, I've worked on all aspects of{' '}
        <span className='font-medium'>full-stack web development</span>, from
        API and UI design and development, to testing and deployment, and
        monitoring and analytics.{' '}
        <span className='italic'>My favorite part of programming</span> is the
        problem-solving aspect. I <span className='underline'>love</span> the
        feeling of finally figuring out the solution to a bug after digging deep
        into your code for hours, and will stop at nothing to find the optimal
        solution.
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
        developer starting <span className='font-medium'>Summer 2025</span>.
      </p>
      <p>
        <span className='italic'>When I'm not coding</span>, I enjoy playing
        video games, listening to music, and playing sports. I always try to{' '}
        <span className='font-medium'>stay curious</span> about the world, and I
        love all things tech related, whether it be PC's, cars, or mechanical
        keyboards!
        <span className='font-medium'></span>
      </p>
    </motion.section>
  );
}

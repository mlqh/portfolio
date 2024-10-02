'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { zoomBottomLeftAnimationVariants } from '@/lib/animations';

const getRandomBorderColor = (itemIndex: number) => {
  const indx = itemIndex % 3;
  const rgb = [0, 0, 0];

  rgb.forEach((_, index) => {
    rgb[index] = Math.floor(Math.random() * 156) + 70;
  });

  rgb[indx] = rgb[indx] + 30;

  return `1px solid rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 1)`;
};

export default function Skills() {
  const { ref } = useSectionInView('Skills');

  return (
    <section
      id='skills'
      className='mb-28 scroll-mt-28 max-w-[55rem] text-center sm:mb-36'
      ref={ref}
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className='flex flex-wrap justify-center gap-3 text-lg text-gray-800'>
        {skillsData.map((skill, index) => (
          <motion.li
            className='bg-white border border-black/20 rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80'
            key={index}
            variants={zoomBottomLeftAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            custom={index}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
              background: 'rgba(236, 236, 236, 0.5)',
              border: getRandomBorderColor(index),
            }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

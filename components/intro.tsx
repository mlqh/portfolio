'use client';

import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { HiDocumentSearch } from 'react-icons/hi';

export default function Intro() {
  const { ref } = useSectionInView('Home');

  return (
    <section
      id='home'
      className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'
      ref={ref}
    >
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              src='/portrait.png'
              alt='Matthew Portrait'
              width={192}
              height={192}
              quality={80}
              priority={true}
              className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
            />
          </motion.div>
          <motion.span
            className='text-4xl absolute bottom-0 right-0'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className='font-bold'>Hi, I&apos;m Matthew.</span> I&apos;m a{' '}
        <span className='font-bold'>backend/full-stack engineer</span> with{' '}
        <span className='font-bold'>2 years</span> of experience. I enjoy
        building <span className='italic'>performant systems </span>and the
        challenges that come with it. My focus is{' '}
        <span className='underline'>Java and Spring Boot</span>.
      </motion.h1>

      <motion.div
        className='flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href='#contact'
          className='group flex flex-row justify-center bg-gray-900 text-white px-7 py-3 items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all dark:bg-white/90  dark:text-gray-900'
        >
          Contact Me!
          <BsArrowRight className='opacity-70 group-hover:translate-x-l transition' />
        </Link>

        <a
          className='group flex flex-row bg-white px-7 py-3 items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 border border-black/10 active:scale-105 transition-all cursor-pointer dark:bg-white/10 '
          href='/cv.pdf'
          target='_blank'
          rel='noreferrer'
        >
          View CV
          <HiDocumentSearch className='opacity-60 group-hover:translate-y-l transition' />
        </a>

        <a
          className='bg-white text-gray-700 p-4 items-center gap-2 rounded-full text-[1.3rem] focus:scale-110 hover:scale-110 hover:text-gray-950 border border-black/10 active:scale-105 transition-all cursor-pointer dark:bg-white/10 dark:text-white/70'
          href='https://linkedin.com/in/mlqh'
          target='_blank'
        >
          <BsLinkedin />
        </a>

        <a
          className='bg-white text-gray-700 p-4 items-center gap-2 rounded-full text-[1.3rem] focus:scale-110 hover:scale-110 hover:text-gray-950 border border-black/10 active:scale-105 transition-all cursor-pointer dark:bg-white/10 dark:text-white/70'
          href='https://github.com/mlqh'
          target='_blank'
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}

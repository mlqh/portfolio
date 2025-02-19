'use client';

import { motion } from 'framer-motion';
import React from 'react';

export default function CurrentlyListening() {
  return (
    <motion.div
      className='flex items-center justify-center mt-8 fixed bottom-6 left-6'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
      }}
    >
      <div className='flex flex-col gap-2 items-center justify-center'>
        <h1 className='font-bold pr-1'>🎧 Current Vibe:</h1>
        <a
          className='flex justify-center'
          href='https://spotify-github-profile.kittinanx.com/api/view?uid=m.lqh&redirect=true'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='p-2 opacity-95 bg-gray-900 dark:bg-white/10 hover:scale-105 hover:bg-gray-950 active:scale-105 transition-all rounded-lg shadow-lg'>
            <img
              src='https://spotify-github-profile.kittinanx.com/api/view?uid=m.lqh&cover_image=true&theme=novatorem&show_offline=true&interchange=false&bar_color_cover=false'
              alt='Spotify Widget'
            />
          </div>
        </a>
      </div>
    </motion.div>
  );
}

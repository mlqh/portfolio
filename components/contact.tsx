'use client';

import React, { useState } from 'react';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
  const { ref } = useSectionInView('Contact');
  const [contactEmail, setContactEmail] = useState<string>('');
  const [contactMessage, setContactMessage] = useState<string>('');

  return (
    <motion.section
      id='contact'
      className='mb-20 scroll-mt-30 sm:mb-28 w-[min(100%, 38rem)] text-center'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      ref={ref}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className='text-gray-700 -mt-6 dark:text-white/80'>
        Please contact me directly at{' '}
        <a className='underline' href='mailto:m.lqh02@gmail.com'>
          m.lqh02@gmail.com
        </a>{' '}
        or through this form
      </p>

      <form
        id='contact-form'
        className='mt-8 flex flex-col dark:text-black'
        action={async (formData) => {
          const { error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success('Email sent successfully.');
          setContactEmail('');
          setContactMessage('');
        }}
      >
        <input
          type='email'
          name='senderEmail'
          required
          maxLength={200}
          className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-90 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          placeholder='Your Email'
          value={contactEmail}
          onChange={(e) => setContactEmail(e.target.value)}
        />
        <textarea
          name='message'
          required
          maxLength={5000}
          className='h-52 my-3 px-4 py-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-90 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          placeholder='Your Message'
          value={contactMessage}
          onChange={(e) => setContactMessage(e.target.value)}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}

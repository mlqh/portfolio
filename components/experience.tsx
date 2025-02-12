'use client';

import React, { useEffect, useState } from 'react';
import SectionHeading from './section-heading';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { useTheme } from '@/context/theme-context';

export default function Experience() {
  const { ref, inView } = useSectionInView('Experience', 0.3);
  const { theme } = useTheme();
  const [animatedTimes, setAnimatedTimes] = useState<number>(0);

  useEffect(() => {
    setAnimatedTimes(animatedTimes + 1);
  }, [inView]);

  return (
    <section id='experience' className='mb-28 scroll-mt-30' ref={ref}>
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor='' animate={animatedTimes > 2 ? false : true}>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={inView}
              contentStyle={{
                background:
                  theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.5)',
                boxShadow: 'none',
                border: '1px solid rbga(0, 0, 0, 0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight: '0.4rem solid #9ca3af',
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                background:
                  theme === 'light' ? 'white' : 'rgba(255, 255, 255, 0.10)',
                fontSize: '1.5rem',
              }}
            >
              <h3 className='font-semibold capitalize'>{item.title}</h3>
              <p className='font-normal !mt-0'>{item.location}</p>
              <p className='!mt-1 font-normal text-gray-700 dark:text-white/75'>
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}

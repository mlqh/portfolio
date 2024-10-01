import { useActiveSectionContext } from '@/context/active-section-context';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { SectionName } from './types';

export default function Hooks() {
  return null;
}

export function useSectionInView(
  sectionName: SectionName,
  triggerOnce: boolean,
  threshold = 0.75
) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
    inView,
  };
}

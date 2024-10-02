export const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.04 * index,
    },
  }),
};

export const zoomBottomLeftAnimationVariants = {
  initial: {
    opacity: 0,
    x: -100,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: 0.04 * index,
    },
  }),
};

export const rotateInAnimationVariants = {
  initial: {
    opacity: 0,
    rotate: -90,
  },
  animate: (index: number) => ({
    opacity: 1,
    rotate: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export const tweenInAnimationVariants = {
  initial: {
    opacity: 0,
    rotate: -90,
  },
  animate: (index: number) => ({
    opacity: 1,
    rotate: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.5,
      ease: 'easeInOut',
    },
  }),
};

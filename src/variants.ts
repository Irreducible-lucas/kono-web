export const hoverVariant = {
  hover: {
    scale: [1, 1.1, 1, 1.1, 1.1, 1, 1.1],
  },
};

export const containerVariant = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      delay: 0.5,
      when: "beforeChildren",
    },
  },
};

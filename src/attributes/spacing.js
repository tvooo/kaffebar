const base = "0.5rem";

const radius = "0.1875rem";

const borderWidth = "0.15rem";

const spacing = {
  // teeny: "1rem",
  wee: "0.5rem",
  base: "1rem",
  wow: "1.5rem",
  huge: "2rem",
  massive: "4rem"
};

const typeSizes = {
  /*sm: */
  wee: {
    fontSize: "0.875rem",
    lineHeight: "1.5rem"
  },
  base: {
    fontSize: spacing.base,
    lineHeight: "2.5rem"
  },
  wow: {
    fontSize: "1.125rem", // 18
    lineHeight: "1.5rem" // 24
  },
  huge: {
    fontSize: "1.375rem", //22
    lineHeight: "2rem" //32
  },
  massive: {
    fontSize: "1.875rem", //30
    lineHeight: "2.5rem" //40
  }
};

export { typeSizes };
export { spacing };
export { borderWidth };
export { radius };

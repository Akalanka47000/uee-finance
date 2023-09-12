export const borderRadius = {
  top: (r) => {
    return {
      borderTopLeftRadius: r,
      borderTopRightRadius: r
    };
  },
  bottom: (r) => {
    return {
      borderBottomLeftRadius: r,
      borderBottomRightRadius: r
    };
  },
  left: (r) => {
    return {
      borderTopLeftRadius: r,
      borderBottomLeftRadius: r
    };
  },
  right: (r) => {
    return {
      borderTopRightRadius: r,
      borderBottomRightRadius: r
    };
  }
};

export default { borderRadius };

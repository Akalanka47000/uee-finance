export const padding = {
  fromLTRB: (l, t, r, b) => {
    return {
      paddingTop: t,
      paddingBottom: b,
      paddingLeft: l,
      paddingRight: r
    };
  },
  symmetric: (v, h) => {
    return {
      paddingVertical: v,
      paddingHorizontal: h
    };
  }
};

export const margin = {
  fromLTRB: (l, t, r, b) => {
    return {
      marginTop: t,
      marginBottom: b,
      marginLeft: l,
      marginRight: r
    };
  },
  symmetric: (v, h) => {
    return {
      marginVertical: v,
      marginHorizontal: h
    };
  },
  horizontal: (m) => {
    return {
      marginLeft: m,
      marginRight: m
    };
  },
  vertical: (m) => {
    return {
      marginTop: m,
      marginBottom: m
    };
  }
};

export default { padding, margin };

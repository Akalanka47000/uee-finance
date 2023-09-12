export const cleanObjectKeys = (keys, value = {}) =>
  Object.keys(keys).reduce((acc, key) => {
    acc[key] = value;
    return acc;
  }, {});

export const createEnum = (keys) =>
  Object.freeze(
    keys.reduce((acc, key) => {
      acc[key] = key;
      return acc;
    }, {})
  );

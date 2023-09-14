export * from './cache';
export * from './date';
export * from './reducers';
export * from './size';

export const withOpacity = (color, opacity) => {
  return color + Math.round(opacity * 255).toString(16);
};

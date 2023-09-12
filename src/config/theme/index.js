import { MD2LightTheme } from 'react-native-paper';
import { default as fonts } from './typography';

export { default as layout } from './layout';

export * from './borders';
export * from './spacing';
export * from './typography';

export const colors = {
  ...MD2LightTheme.colors,
  background: '#1c1c1c',
  black: '#000000',
  white: '#ffffff',
  gray: '#c7c7c7',
  transparent: 'transparent',
  shimmer: '#262626',
  success: '#1762DA',
  error: '#bf0000'
};

colors.primary = colors.black;
colors.surface = colors.white;

const theme = {
  ...MD2LightTheme,
  dark: false,
  version: 2,
  colors,
  fonts
};

export default theme;

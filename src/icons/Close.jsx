import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Close = ({ width, height, size = 32, color = '#222222', ...props }) => (
  <Svg
    width={width ?? size}
    height={height ?? size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path d="M24 8L8 24" stroke={color} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M8 8L24 24" stroke={color} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export default Close;

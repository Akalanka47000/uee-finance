import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Minus = ({ color = '#999999', ...props }) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="M5 12H19" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export default Minus;

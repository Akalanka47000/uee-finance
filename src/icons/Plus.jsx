import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Plus = ({ size = 16, color = '#000', ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="M8 3.3335V12.6668" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M3.33301 8H12.6663" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export default Plus;

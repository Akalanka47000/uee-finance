import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowLeft = ({ color = '#ffffff', ...props }) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="M19 12H5" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M12 19L5 12L12 5" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export default ArrowLeft;

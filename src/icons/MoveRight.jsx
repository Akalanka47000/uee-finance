import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const MoveRight = ({ size = 24, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={props.color ?? '#fff'}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-move-right"
    {...props}>
    <Path d="M18 8L22 12L18 16" />
    <Path d="M2 12H22" />
  </Svg>
);

export default MoveRight;

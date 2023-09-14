import * as React from 'react';
import Svg, { Path, Polyline } from 'react-native-svg';

const FileDownload = ({ size = 20, ...props } = {}) => (
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
    className="lucide lucide-file-down"
    {...props}>
    <Path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <Polyline points="14 2 14 8 20 8" />
    <Path d="M12 18v-6" />
    <Path d="m9 15 3 3 3-3" />
  </Svg>
);

export default FileDownload;

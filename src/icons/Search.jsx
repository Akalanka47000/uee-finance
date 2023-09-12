import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Search = ({ color = '#999999', ...props }) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M10.8889 19.7779C15.7982 19.7779 19.7779 15.7982 19.7779 10.8889C19.7779 5.97971 15.7982 2 10.8889 2C5.97971 2 2 5.97971 2 10.8889C2 15.7982 5.97971 19.7779 10.8889 19.7779Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M22.0013 21.9999L17.168 17.1665"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Search;

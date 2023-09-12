import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

const Edit = ({ size = 18, color = '#999999', ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M12.847 2.127a2.14 2.14 0 0 1 3.026 3.026L5.661 15.365 1.5 16.5l1.135-4.16L12.847 2.126Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default Edit;

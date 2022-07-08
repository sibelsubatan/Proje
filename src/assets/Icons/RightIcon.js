import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function RightIcon({size, color}) {
  return (
    <Svg
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M8 4l8 8-8 8"
        stroke={color || '#000'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default RightIcon;

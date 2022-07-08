import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function BrandIcon({size, color}) {
  return (
    <Svg
      width={size || 24}
      height={size || 24}
      fill="#000"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M22.776 12.34L11.625 1.19a1.491 1.491 0 00-1.06-.44H3A2.253 2.253 0 00.75 3v7.55a1.505 1.505 0 00.473 1.094l11.862 11.143a1.116 1.116 0 00.812.305 1.117 1.117 0 00.787-.363l8.124-8.831a1.122 1.122 0 00-.032-1.558zm-8.94 9.095L2.25 10.55V3A.75.75 0 013 2.25h7.564l10.897 10.897-7.625 8.287z"
        fill={color || '#E3BA6A'}
      />
      <Path
        d="M6.938 4.5a2.438 2.438 0 100 4.875 2.438 2.438 0 000-4.875zm0 3.375a.937.937 0 110-1.875.937.937 0 010 1.875z"
        fill={color || '#E3BA6A'}
      />
    </Svg>
  );
}

export default BrandIcon;

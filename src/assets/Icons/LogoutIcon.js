import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function LogoutIcon(size, color) {
  return (
    <Svg
      width={24 || size}
      height={24 || size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G clipPath="url(#prefix__clip0_4_25)">
        <Path
          d="M18.423 5.664l5.574 6.384-5.574 6.336v-4.248h-8.341V9.912h8.341V5.664zm-3.352 12.288l2.14 2.568c-2.1 2.336-4.376 3.504-6.826 3.504-2.922 0-5.382-1.148-7.382-3.444-2-2.296-2.999-5.164-2.999-8.604 0-2.16.458-4.16 1.373-6 .916-1.84 2.151-3.292 3.706-4.356C6.638.556 8.325.024 10.143.024c2.477 0 4.826 1.184 7.048 3.552l-2.12 2.544c-1.535-1.664-3.171-2.496-4.908-2.496-2.006 0-3.7.832-5.08 2.496-1.38 1.664-2.07 3.696-2.07 6.096 0 2.24.71 4.168 2.131 5.784 1.42 1.616 3.087 2.424 4.999 2.424 1.763 0 3.406-.824 4.927-2.472z"
          fill="#E3BA6A"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_4_25">
          <Path fill="#E3BA6A" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default LogoutIcon;

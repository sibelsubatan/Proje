import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ProfileIcon({size, color}) {
    return (
        <Svg
            width={size || 24}
            height={size || 24}
            viewBox="0 0 24 24"
            fill="#000"
            xmlns="http://www.w3.org/2000/svg">
            <Path
                d="M12 11.333a4.667 4.667 0 1 0 0-9.335 4.667 4.667 0 0 0 0 9.335Zm0-8A3.333 3.333 0 1 1 12 10a3.333 3.333 0 0 1 0-6.667ZM20.313 16.247a11.44 11.44 0 0 0-16.62 0c-.231.247-.36.574-.36.913v3.507A1.333 1.333 0 0 0 4.667 22h14.666a1.333 1.333 0 0 0 1.334-1.333V17.16a1.333 1.333 0 0 0-.354-.913Zm-.98 4.42H4.667v-3.514a10.114 10.114 0 0 1 14.666 0v3.514Z"
                fill={color || "#FEFEFE"}
            />
        </Svg>
    );
}

export default ProfileIcon;

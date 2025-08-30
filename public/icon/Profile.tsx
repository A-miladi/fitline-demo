import { IconProps } from '@/types';

const Profile: React.FC<IconProps> = ({ size = 28, color  }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.1868 13.6578C15.0677 13.6459 14.9249 13.6459 14.7939 13.6578C11.9602 13.5626 9.70996 11.2409 9.70996 8.38338C9.70996 5.46637 12.0674 3.09705 14.9963 3.09705C17.9133 3.09705 20.2826 5.46637 20.2826 8.38338C20.2707 11.2409 18.0205 13.5626 15.1868 13.6578Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.23421 18.0512C6.35292 19.98 6.35292 23.1233 9.23421 25.0401C12.5084 27.2309 17.8781 27.2309 21.1523 25.0401C24.0336 23.1114 24.0336 19.9681 21.1523 18.0512C17.89 15.8724 12.5203 15.8724 9.23421 18.0512Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Profile;

import * as React from "react";

const SvgEmailIcon = (props) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.167 17.083H5.833c-2.5 0-4.166-1.25-4.166-4.166V7.083c0-2.916 1.666-4.166 4.166-4.166h8.334c2.5 0 4.166 1.25 4.166 4.166v5.834c0 2.916-1.666 4.166-4.166 4.166Z"
      fill="#3C3C3C"
    />
    <path
      d="m14.167 7.5-2.609 2.083c-.858.684-2.266.684-3.125 0L5.833 7.5"
      stroke="#fff"
      strokeWidth={1.25}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgEmailIcon;

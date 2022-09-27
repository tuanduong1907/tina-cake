import * as React from "react";

const SvgDashboardIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="DashboardIcon_svg__h-6 DashboardIcon_svg__w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m20 7-8-4-8 4m16 0-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
    />
  </svg>
);

export default SvgDashboardIcon;

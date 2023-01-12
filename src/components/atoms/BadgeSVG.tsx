import React from "react";

type BadgeSVGProps = {
  height?: number;
  width?: number;
} & React.ComponentPropsWithRef<"svg">;

// Path d for a hexagon shape with border radius
const pathDimension = `
    M38,2 
    L82,2 
    A12,12 0 0,1 94,10 
    L112,44 
    A12,12 0 0,1 112,56
    L94,90       
    A12,12 0 0,1 82,98
    L38,98
    A12,12 0 0,1 26,90
    L8,56
    A12,12 0 0,1 8,44
    L26,10
    A12,12 0 0,1 38,2
`;

export const BadgeSVG: React.FunctionComponent<BadgeSVGProps> = ({
  width,
  height,
  children,
  ...otherProps
}) => {
  return (
    <svg
      {...otherProps}
      viewBox="0 0 120 100"
      role="img"
      width={width}
      height={height}
    >
      <defs>
        <clipPath id="hexagon_clip">
          <path id="hexagon" d={pathDimension} />
        </clipPath>
      </defs>
      {children}
      <use
        href="#hexagon"
        x="0"
        y="0"
        stroke="none"
        stroke-width="0"
        fill="transparent"
      />
    </svg>
  );
};

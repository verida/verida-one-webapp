import React from "react";

type BadgeProps = {
  value: number | string;
} & React.ComponentPropsWithRef<"div">;

/** Display a information, usually a number, in a small container. */
export const Badge: React.FC<BadgeProps> = (props) => {
  const { value, ...divProps } = props;
  return (
    <div {...divProps}>
      <div className="rounded bg-gray-dark p-0.5 text-xs leading-3">
        {value}
      </div>
    </div>
  );
};

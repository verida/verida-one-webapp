import React from "react";

type BadgeProps = {
  count: number | string;
  title: string;
} & React.ComponentPropsWithRef<"div">;

export const Badge: React.FC<BadgeProps> = ({
  count,
  title,
  className = "",
  ...otherProps
}) => {
  return (
    <div {...otherProps} className="flex items-center space-x-1">
      <h3 className={`py-1.5 text-sm font-semibold ${className}`}>{title}</h3>
      <div className="rounded bg-gray-dark p-0.5 text-xs leading-3">
        {count}
      </div>
    </div>
  );
};

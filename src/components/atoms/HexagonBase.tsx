import React from "react";

type HexagonBaseProps = {
  rounded?: boolean;
} & React.ComponentPropsWithoutRef<"div">;

export const HexagonBase: React.FunctionComponent<HexagonBaseProps> = (
  props
) => {
  const { rounded = false, ...otherProps } = props;

  // FIXME: Display the Verida Badges correctly in a rounded hexagonal shape and get rid of the 'rounded' prop

  return (
    <div
      {...otherProps}
      style={{
        clipPath: rounded
          ? "path('M154.466 13.0153C149.97 5.26921 141.674 0.5 132.698 0.5L61.3019 0.5C52.326 0.5 44.0299 5.26921 39.5341 13.0153L3.88118 74.4438C-0.627062 82.2113 -0.627061 91.7887 3.88118 99.5562L39.5341 160.985C44.0299 168.731 52.326 173.5 61.3019 173.5H132.698C141.674 173.5 149.97 168.731 154.466 160.985L190.119 99.5562C194.627 91.7887 194.627 82.2113 190.119 74.4438L154.466 13.0153Z')"
          : "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
        // For some reason the tailwind aspect-ratio class was not working, so put it in style
        aspectRatio: rounded ? "10/8.969072" : "10/8.66025",
      }}
    ></div>
  );
};

import React from "react";
import { Icon, IconButton } from "components/atoms";

type ProfileSectionContainerProps = {
  title: string;
  onClickMore?: () => void;
} & React.ComponentPropsWithoutRef<"section">;

export const ProfileSectionContainer: React.FunctionComponent<
  ProfileSectionContainerProps
> = (props) => {
  const { children, title, onClickMore, ...otherProps } = props;

  if (!children) {
    return null;
  }

  return (
    <section {...otherProps}>
      <div className="">
        <div className="mb-2 flex items-center justify-between space-x-1.5">
          <h3 className="py-1.5 font-semibold">{title}</h3>
          {onClickMore && (
            <IconButton
              variant="text"
              size="small"
              icon={<Icon type="arrow-right" />}
              onClick={onClickMore}
            />
          )}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
};

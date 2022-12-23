import React from "react";
import { Icon, IconButton } from "components/atoms";

type ProfileSectionContainerProps = {
  title: string;
  badge?: string | number;
  onClickMore?: () => void;
} & React.ComponentPropsWithoutRef<"section">;

/** Conatiner for a section in a the Profile page. Provides a title and an
 * action button with the `onClickMore` prop.*/
export const ProfileSectionContainer: React.FunctionComponent<
  ProfileSectionContainerProps
> = (props) => {
  const { children, title, badge, onClickMore, ...otherProps } = props;

  if (!children) {
    return null;
  }

  return (
    <section {...otherProps}>
      <div className="">
        <div className="mb-2 flex items-center justify-between space-x-1.5">
          <div className="flex items-center space-x-1">
            <h3 className="py-1.5 font-semibold">{title}</h3>
            {badge && (
              <div className="rounded bg-gray-dark p-0.5 text-xs leading-3">
                {/** TODO: Create a dedicated atomic component */}
                {badge}
              </div>
            )}
          </div>
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

import React from "react";
import { Badge, Icon, IconButton } from "components/atoms";

type ProfileSectionWrapperProps = {
  title: string;
  badgeValue?: string | number;
  onClickMore?: () => void;
} & React.ComponentPropsWithoutRef<"section">;

/** Wrapper for a section in a the Profile page. Provides a title and an
 * action button with the `onClickMore` prop.*/
export const ProfileSectionWrapper: React.FunctionComponent<
  ProfileSectionWrapperProps
> = (props) => {
  const { children, title, badgeValue, onClickMore, ...sectionProps } = props;

  if (!children) {
    return null;
  }

  return (
    <section {...sectionProps}>
      <div className="">
        <div className="mb-2 flex items-center justify-between space-x-1.5">
          <div className="flex items-center space-x-1">
            <h3 className="py-1.5 font-semibold">{title}</h3>
            {badgeValue && <Badge value={badgeValue} />}
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

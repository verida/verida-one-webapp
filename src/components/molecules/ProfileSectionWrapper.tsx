import React from "react";
import { ProfileSectionHeader } from "./ProfileSectionHeader";

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
      <ProfileSectionHeader
        title={title}
        badgeValue={badgeValue}
        onClickMore={onClickMore}
      />
      <div>{children}</div>
    </section>
  );
};

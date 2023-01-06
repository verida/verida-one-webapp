import React from "react";
import { useNavigate } from "react-router-dom";
import { PageHeader } from "./PageHeader";

type PageWrapperProps = {
  title?: string;
  badgeValue?: string | number;
} & React.ComponentPropsWithoutRef<"div">;

/** Assets Page wrapper to wrapper badge-list, collectibles lists page */
export const PageWrapper: React.FC<PageWrapperProps> = (props) => {
  const { children, title, badgeValue, ...otherProps } = props;
  const navigate = useNavigate();

  const handleGoBackNavigation = () => {
    navigate(-1);
  };

  if (!children) {
    return null;
  }

  return (
    <div {...otherProps}>
      <PageHeader
        title={title}
        badgeValue={badgeValue}
        onBackClick={handleGoBackNavigation}
      />
      <div>{children}</div>
    </div>
  );
};

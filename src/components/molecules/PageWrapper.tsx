import React from "react";
import { useNavigate } from "react-router-dom";
import { PageHeader } from "./PageHeader";

type PageWrapperProps = {
  title?: string;
  badgeValue?: string | number;
  children: React.ReactNode;
};

/** Assets Page wrapper to wrapper badge-list, collectibles lists page */
export const PageWrapper: React.FC<PageWrapperProps> = (props) => {
  const { children, title, badgeValue } = props;
  const navigate = useNavigate();

  const handleGoBackNavigation = () => {
    navigate(-1);
  };

  if (!children) {
    return null;
  }

  return (
    <div className="flex flex-grow flex-col">
      <PageHeader
        title={title}
        badgeValue={badgeValue}
        onBackClick={handleGoBackNavigation}
      />
      <div className="flex flex-grow flex-col">{children}</div>
    </div>
  );
};

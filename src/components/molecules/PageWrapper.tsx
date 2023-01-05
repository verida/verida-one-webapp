import React from "react";
import { Badge, Icon, IconButton } from "components/atoms";
import { useNavigate } from "react-router-dom";

type PageWrapperProps = {
  title: string;
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
      <header className="mb-6 flex items-center justify-between">
        <IconButton
          variant="text"
          size="small"
          icon={<Icon type="arrow-left" />}
          onClick={handleGoBackNavigation}
        />
        <div className="flex items-center space-x-1">
          <h2 className={`text-xl font-bold`}>{title}</h2>
          {badgeValue && <Badge value={badgeValue} />}
        </div>
        <div />
      </header>
      <div>{children}</div>
    </div>
  );
};

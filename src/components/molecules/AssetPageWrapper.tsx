import React from "react";
import { Badge, Icon, IconButton } from "components/atoms";
import { useNavigate } from "react-router-dom";

type AssetPageWrapperProps = {
  title: string;
  badgeCount?: string | number;
} & React.ComponentPropsWithoutRef<"div">;

/** Assets Page wrapper to wrapper badge-list, collectibles lists page */
export const AssetPageWrapper: React.FC<AssetPageWrapperProps> = (props) => {
  const { children, title, badgeCount, ...otherProps } = props;
  const navigate = useNavigate();

  const handleGoBackNavigation = () => {
    navigate(-1);
  };

  if (!children) {
    return null;
  }

  return (
    <div {...otherProps}>
      <div className="mb-7 flex items-center justify-between">
        <IconButton
          variant="text"
          size="small"
          icon={<Icon type="arrow-left" />}
          onClick={handleGoBackNavigation}
        />
        <div>
          {badgeCount && (
            <Badge className="text-xl" count={badgeCount} title={title} />
          )}
        </div>
        <div />
      </div>
      <div>{children}</div>
    </div>
  );
};

import { Badge, Icon, IconButton } from "components/atoms";
import React from "react";

type ProfileSectionHeaderProps = {
  title: string;
  badgeValue?: string | number;
  onClickMore?: () => void;
};

export const ProfileSectionHeader: React.FunctionComponent<
  ProfileSectionHeaderProps
> = (props) => {
  const { badgeValue, onClickMore, title } = props;
  return (
    <header className="mb-2 flex items-center justify-between space-x-1.5">
      <div className="flex items-center space-x-1">
        <h3 className="py-1.5 font-semibold">{title}</h3>
        {badgeValue !== undefined && <Badge value={badgeValue} />}
      </div>
      {onClickMore && (
        <IconButton
          variant="text"
          size="small"
          icon={<Icon type="arrow-right" />}
          onClick={onClickMore}
        />
      )}
    </header>
  );
};

import { Badge, Icon, IconButton } from "components/atoms";
import React from "react";

type PageHeaderProps = {
  title?: string;
  badgeValue?: string | number;
  onBackClick?: () => void;
};

export const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => {
  const { badgeValue, title, onBackClick } = props;
  return (
    <header className="mb-4 flex items-center justify-between">
      <IconButton
        variant="text"
        size="small"
        icon={<Icon type="arrow-left" />}
        onClick={onBackClick}
      />
      {(title || badgeValue) && (
        <div className="flex items-center space-x-1">
          {title && <h2 className={`text-xl font-bold`}>{title}</h2>}
          {badgeValue && <Badge value={badgeValue} />}
        </div>
      )}
      <div className="w-8" />
    </header>
  );
};

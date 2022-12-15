import React from "react";
import { useIntl } from "react-intl";

type ProfileAvatarProps = {
  avatar: string;
  name: string;
  timeStamp: string;
};

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  avatar,
  name,
  timeStamp,
}) => {
  const i18n = useIntl();

  const logoAlt = i18n.formatMessage({
    id: "App.LogoAlt",
    description: "Alternate text for the logo image",
    defaultMessage: "Verida One Logo",
  });

  return (
    <div className="flex items-center justify-center text-white">
      <img src={avatar} alt={logoAlt} className="mr-2" />
      <div>
        <h4 className="text-sm">{name}</h4>
        <span className="text-sm font-light">{timeStamp}</span>
      </div>
    </div>
  );
};

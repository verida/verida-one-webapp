import React from "react";
import { ReactComponent as ShareIcon } from "assets/icons/share_icon.svg";
import { IconButton } from "components/atoms";
import { useIntl } from "react-intl";
import { More } from "@icon-park/react";

type UserProfile = {
  avatar: string;
  userName: string;
  name: string;
  timeStamp: string;
};

type ProfileSectionProps = {
  profileInfo: UserProfile;
  email: string;
};

export const ProfileSection: React.FC<ProfileSectionProps> = ({
  profileInfo,
  email,
}) => {
  const i18n = useIntl();

  const contentTitle = i18n.formatMessage({
    id: "App.ProfileSectionTitle",
    description: "Believe in the ethos of web3 and decentralization",
    defaultMessage: "Believe in the ethos of web3 and decentralization",
  });

  return (
    <section>
      <div className="mb-4 flex justify-between  opacity-80">
        <div className="flex">
          <img
            src={profileInfo.avatar}
            alt={profileInfo.name}
            className="mr-2 h-16 w-16"
          />
          <div>
            <h3 className="text-xl">{profileInfo.name}</h3>
            <span className="text-sm font-light text-gray-light opacity-60">
              {profileInfo.userName}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between space-x-2.5">
          <IconButton icon={<ShareIcon />} />
          <IconButton icon={<More />} />
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-sm">{contentTitle}</p>
        <p className="text-sm font-light text-gray-light ">{email}</p>
      </div>
    </section>
  );
};

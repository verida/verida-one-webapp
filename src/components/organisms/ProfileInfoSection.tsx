import React from "react";
import { IconButton, Icon, Avatar } from "components/atoms";
import { ProfileInfo } from "lib/types";

type ProfileInfoSectionProps = {
  profileInfo: ProfileInfo;
};

/** Section for the Profile page rendering the main information */
export const ProfileInfoSection: React.FC<ProfileInfoSectionProps> = (
  props
) => {
  const { profileInfo } = props;

  return (
    <section>
      <div className="flex items-start justify-between space-x-3">
        <div className="flex items-center">
          <Avatar
            image={profileInfo.avatar}
            alt={profileInfo.name}
            size="large"
            className="mr-3"
          />
          <div className="flex flex-col items-start">
            <h2 className="text-xl font-bold">{profileInfo.name}</h2>
            {profileInfo.veridaName && (
              <span className="font-normal text-primary/60">
                {profileInfo.veridaName}
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between space-x-3">
          <IconButton icon={<Icon type="share" />} />
          <IconButton icon={<Icon type="more" />} />
        </div>
      </div>
      {profileInfo.description && (
        <p className="mt-4">{profileInfo.description}</p>
      )}
    </section>
  );
};

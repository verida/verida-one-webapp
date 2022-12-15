import React from "react";
import { IconButton, ProfileAvatar } from "components/atoms";

type ActivityCardProps = {
  bodyText?: string;
  image?: string;
  icon: React.ReactElement;
  profile: {
    avatar: string;
    name: string;
    timeStamp: string;
  };
};
export const ActivityCard: React.FC<ActivityCardProps> = ({
  image,
  icon,
  profile,
  bodyText,
}) => {
  return (
    <div className="rounded-xl  bg-gray-dark p-4">
      <div className="flex items-center justify-between">
        <ProfileAvatar {...profile} />
        <IconButton icon={icon} variant="rounded-full" connected={true} />
      </div>
      <p className="my-3">{bodyText}</p>
      {image && (
        <div>
          <img className="w-full bg-cover" src={image} alt={profile.name} />
        </div>
      )}
    </div>
  );
};

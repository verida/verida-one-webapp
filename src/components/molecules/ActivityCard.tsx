import React from "react";
import { IconButton, ProfileAvatar } from "../atoms";

import bgImg from "../../assets/post_image.png";

type ActivityCardProps = {
  title?: string;
  bodyText?: string;
};

const profile = {
  img: "@cmcWebCode",
  name: "@cmcWebCode",
  timeStamp: "2 hours ago",
};

export const ActivityCard: React.FC<ActivityCardProps> = ({
  bodyText = "Updated roadmap diagram!",
}) => {
  return (
    <div className="rounded-xl  bg-gray-dark p-4 text-white">
      <div className="flex items-center justify-between">
        <ProfileAvatar {...profile} />
        <IconButton iconType="Twitter" variant="rounded-full" isActive />
      </div>
      <p className="my-3">{bodyText}</p>
      <img src={bgImg} alt="" />
    </div>
  );
};

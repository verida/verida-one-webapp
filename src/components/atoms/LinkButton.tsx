import React from "react";

type LinkButtonProps = {
  label: string;
  link: string;
};

export const LinkButton: React.FC<LinkButtonProps> = ({ link, label }) => {
  return (
    <a
      href={link}
      className={`flex items-center justify-center rounded-xl bg-gray-dark py-[18px] px-4 text-sm font-medium text-white hover:opacity-30 disabled:opacity-20`}
    >
      {label}
    </a>
  );
};

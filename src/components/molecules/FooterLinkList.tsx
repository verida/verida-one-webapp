import { ButtonLink } from "components/atoms";
import React from "react";

type FooterLinkListProps = {
  links: {
    label: string;
    url: string;
  }[];
} & React.ComponentPropsWithRef<"div">;

export const FooterLinkList: React.FunctionComponent<FooterLinkListProps> = ({
  links,
}) => {
  return (
    <div>
      <ul className="flex flex-col -space-y-2 md:flex-row md:-space-x-4 md:space-y-0">
        {links.map((item) => (
          <ButtonLink
            target="_blank"
            rel="noopener"
            variant="text"
            url={item.url}
          >
            {item.label}
          </ButtonLink>
        ))}
      </ul>
    </div>
  );
};

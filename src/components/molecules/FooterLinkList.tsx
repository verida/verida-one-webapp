import React from "react";

type FooterLinkListProps = {
  links: {
    label: string;
    url: string;
  }[];
} & React.ComponentPropsWithRef<"div">;

export const FooterLinkList: React.FunctionComponent<FooterLinkListProps> = ({
  links,
  ...otherProps
}) => {
  return (
    <div {...otherProps}>
      <ul className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
        {links.map((item) => (
          <li>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:underline`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

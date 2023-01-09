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
      <ul className="flex flex-col items-center justify-center md:flex-row md:space-x-4">
        {links.map((item) => (
          <li className="my-3">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

import React from "react";
import { useIntl } from "react-intl";
import { IconButton, Icon, ButtonLink } from "components/atoms";
import logo from "assets/images/verida_one_logo.png";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  const i18n = useIntl();

  const logoAlt = i18n.formatMessage({
    id: "Header.logoAlt",
    description: "Alternate text for the logo image",
    defaultMessage: "Verida One Logo",
  });

  // TODO: Remove the create your profile CTA when implementing the Connect
  // const connectButtonLabel = i18n.formatMessage({
  //   id: "Header.connectButtonLabel",
  //   description: "Label of the Connect button in the Header",
  //   defaultMessage: "Connect",
  // });

  const createYourProfileButtonLabel = i18n.formatMessage({
    id: "Header.createYourProfileButtonLabel",
    description: "Label of the CTA button in the Header to create a profile",
    defaultMessage: "Create your profile",
  });

  /** Header height is based on its content (h-10) + padding (py-3) + the border bottom.
   * Because of this border of 1px, the padding bottom should be py-[3 - '1px']. */
  // TODO: Update Tailwind config to allow spacing of 2.75 for the padding bottom
  // TODO: Follow the Figma design downsizing the logo and the button internal padding on small viewport (keep current size on large one)
  return (
    <header className="box-border flex items-center justify-between border-b border-solid border-gray-dark bg-background px-4 py-3 opacity-80">
      <h1>
        <Link to="/">
          <img src={logo} alt={logoAlt} className="h-10" />
        </Link>
      </h1>
      <div className="flex items-center justify-between space-x-3">
        <IconButton size="medium" icon={<Icon type="search" />} />
        {/* <Button size="medium">{connectButtonLabel}</Button> */}
        <ButtonLink
          url="https://www.verida.one/"
          target="_blank"
          rel="noopener"
          size="medium"
        >
          {createYourProfileButtonLabel}
        </ButtonLink>
      </div>
    </header>
  );
};

/** Offset for the heigh of the Header */
export const HeaderOffset: React.FunctionComponent = () => {
  return <div className="h-16 w-full" />;
};

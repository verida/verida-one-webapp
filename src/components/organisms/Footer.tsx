import React from "react";
import { useIntl } from "react-intl";
import { ReactComponent as VeridaNetworkLogo } from "assets/images/verida_network_logo.svg";
import {
  VERIDA_NETWORK_URL,
  VERIDA_ONE_DOCUMENTATION_URL,
  VERIDA_TERMS_AND_CONDITIONS_URL,
} from "lib/constants";

export const Footer: React.FunctionComponent = () => {
  const i18n = useIntl();
  const copyrightYear = `${new Date().getFullYear()}`;

  const builtOnLabel = i18n.formatMessage({
    id: "Footer.builtOnLabel",
    defaultMessage: "Built on",
    description: "label of the 'built on' text in the footer section",
  });
  const documentationLinkLabel = i18n.formatMessage({
    id: "Footer.documentationLinkLabel",
    defaultMessage: "Documentation",
    description: "Label of the 'Documentation' Link in the footer section",
  });

  const termsAndConditionLinkLabel = i18n.formatMessage({
    id: "Footer.termsAndConditionLinkLabel",
    defaultMessage: "Terms & Conditions",
    description:
      "Label of the 'Terms and Condition' Link in the footer footer section",
  });

  const copyrightMessage = i18n.formatMessage(
    {
      id: "Footer.copyrightMessage",
      defaultMessage: "© {copyrightYear} Verida One",
      description: "Copyright message in the footer section",
    },
    { copyrightYear }
  );

  return (
    <footer className="flex flex-row items-center justify-between gap-y-3 border-t border-solid border-gray-dark px-6 py-4 text-primary/60 sm:flex-col sm:justify-center sm:gap-y-6">
      <div className="sm:order-3">
        <span>{copyrightMessage}</span>
      </div>
      <div className="flex flex-col justify-center sm:order-1">
        <a
          className="flex flex-col items-center"
          href={VERIDA_NETWORK_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="mb-1 place-content-center text-center">
            {builtOnLabel}
          </span>
          <div className="aspect-[9/3] h-6">
            <VeridaNetworkLogo height="100%" width="100%" />
          </div>
        </a>
      </div>
      <div className="flex items-center gap-x-4 sm:order-2 sm:flex-col">
        <a
          href={VERIDA_ONE_DOCUMENTATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {documentationLinkLabel}
        </a>
        <a
          href={VERIDA_TERMS_AND_CONDITIONS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {termsAndConditionLinkLabel}
        </a>
      </div>
    </footer>
  );
};

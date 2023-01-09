import React from "react";
import { useIntl } from "react-intl";
import { FooterLinkList } from "components/molecules";
import logo from "assets/images/verida_one_logo.png";
import {
  VERIDA_DEVELOPERS_DOCUMENTATION_URL,
  VERIDA_TERMS_AND_CONDITIONS_URL,
} from "lib/constants";

export const Footer: React.FunctionComponent = () => {
  const i18n = useIntl();
  const currentYear = `© ${new Date().getFullYear()}`;

  const builtOnLabel = i18n.formatMessage({
    id: "footer.builtOnLabel",
    defaultMessage: "Built on",
    description: "label of the 'built on' text in the footer section",
  });
  const documentationLinkLabel = i18n.formatMessage({
    id: "footer.documentationLinkLabel",
    defaultMessage: "Documentation",
    description: "Label of the 'Documentation' property in the footer section",
  });

  const termsAndConditionLinkLabel = i18n.formatMessage({
    id: "footer.termsAndConditionLinkLabel",
    defaultMessage: "Terms and Conditions",
    description:
      "Label of the 'Terms and Condition' property in the footer footer section",
  });

  const veridaOnelabel = i18n.formatMessage({
    id: "footer.veridaOneLinkLabel",
    defaultMessage: "Verida One",
    description: "'Verida One' product name in the footer section",
  });

  const footerlogoAlt = i18n.formatMessage({
    id: "footer.logoAlt",
    description: "Alternate text for the footer logo image",
    defaultMessage: "Verida One Logo",
  });

  const footerLinks = [
    {
      label: documentationLinkLabel,
      url: VERIDA_DEVELOPERS_DOCUMENTATION_URL,
    },
    {
      label: termsAndConditionLinkLabel,
      url: VERIDA_TERMS_AND_CONDITIONS_URL,
    },
  ];

  return (
    <footer className="box-border flex flex-col items-center justify-center space-y-1 border-t border-solid border-gray-dark py-4 px-6 text-gray-dark md:flex-row md:justify-between">
      <div className="md:order-2">
        <h6 className="mb-2 text-center">{builtOnLabel}</h6>
        <img src={logo} alt={footerlogoAlt} className="h-7" />
      </div>
      <div className="flex flex-col md:order-3 md:flex-row md:space-x-0">
        <FooterLinkList links={footerLinks} />
      </div>
      <div className="md:order-1">
        <span className="mr-1">{currentYear}</span>
        <span>{veridaOnelabel}</span>
      </div>
    </footer>
  );
};

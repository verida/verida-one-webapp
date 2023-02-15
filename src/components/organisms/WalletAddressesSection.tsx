import React from "react";
import { useIntl } from "react-intl";
import { WalletAddress } from "lib/types";
import { ProfileSectionWrapper, WalletAddressCard } from "components/molecules";

type WalletSectionProps = {
  addresses?: WalletAddress[];
};

/** Section for the Profile page rendering the list of wallet addresses */
export const WalletAddressesSection: React.FC<WalletSectionProps> = (props) => {
  const { addresses } = props;

  const i18n = useIntl();

  if (!addresses?.length) {
    return null;
  }

  const sectionTitle = i18n.formatMessage({
    id: "WalletAddressesSection.sectionTitle",
    description: "Title of the 'Wallets' section in the 'Profile' page",
    defaultMessage: "Wallets",
  });

  return (
    <ProfileSectionWrapper title={sectionTitle}>
      <ul className="space-y-2">
        {addresses.map((address) => (
          <li key={`${address.chainId}:${address.address}`}>
            <WalletAddressCard address={address} />
          </li>
        ))}
      </ul>
    </ProfileSectionWrapper>
  );
};

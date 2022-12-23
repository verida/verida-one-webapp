import React from "react";
import { useIntl } from "react-intl";
import { WalletAddress } from "lib/types";
import {
  ProfileSectionContainer,
  WalletAddressCard,
} from "components/molecules";

type WalletSectionProps = {
  addresses: WalletAddress[];
};

/** Section for the Profile page redenring the list of wallet addresses */
export const WalletAddressesSection: React.FC<WalletSectionProps> = (props) => {
  const { addresses } = props;

  const i18n = useIntl();

  if (addresses.length === 0) {
    return null;
  }

  const sectionTitle = i18n.formatMessage({
    id: "App.WalletSectionTitle",
    description: "Wallets",
    defaultMessage: "Wallets",
  });

  return (
    <ProfileSectionContainer title={sectionTitle}>
      <ul className="space-y-2">
        {addresses.map((address) => (
          <li key={address.address}>
            <WalletAddressCard address={address} />
          </li>
        ))}
      </ul>
    </ProfileSectionContainer>
  );
};

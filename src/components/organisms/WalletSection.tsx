import React from "react";
import { useIntl } from "react-intl";
import { Copy, Share } from "@icon-park/react";
import { IconButton } from "components/atoms";

type WalletData = {
  address: string;
  icon: React.ReactElement;
  link: string;
  connected: boolean;
};

type WalletSectionProps = {
  data: WalletData[];
};

export const WalletSection: React.FC<WalletSectionProps> = ({ data }) => {
  const i18n = useIntl();

  const contentTitle = i18n.formatMessage({
    id: "App.WalletSectionTitle",
    description: "Wallets",
    defaultMessage: "Wallets",
  });

  return (
    <section>
      <h3 className="mb-3.5 text-sm font-semibold text-white">
        {contentTitle}
      </h3>
      <div className="space-y-2">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-between rounded-xl bg-gray-dark py-2 px-4 text-sm font-medium text-white`}
          >
            <div className="flex items-center space-x-1">
              <IconButton
                icon={item.icon}
                connected={item.connected}
                variant="rounded-full"
              />
              <span>{item.address}</span>
            </div>
            <div className="flex items-center justify-center space-x-5">
              <Copy theme="outline" />
              <a aria-label={contentTitle} href="/">
                <Share theme="outline" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

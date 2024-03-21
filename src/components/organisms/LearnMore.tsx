import { useIntl } from "react-intl";
import { motion } from "framer-motion";
import ContentBox from "../molecules/ContentBox";
import BracketsIcon from "../../assets/images/brackets-icon.svg";
import ArrowLeftIcon from "../../assets/images/arrow-left.svg";
import BlockchainIcon from "../../assets/images/blockchain-icon.svg";

const LearnMore = () => {
  const i18n = useIntl();

  const learnMore1Label = i18n.formatMessage({
    id: "LearnMore.Label1",
    description: "",
    defaultMessage: "Developer-Friendly",
  });

  const learnMore1Description = i18n.formatMessage({
    id: "LearnMore.Label1",
    description: "",
    defaultMessage:
      "Remix Verida One data in your apps. Access our developer SDKs to get started.",
  });

  const learnMore2Label = i18n.formatMessage({
    id: "LearnMore.Label1",
    description: "",
    defaultMessage: "Decentralized",
  });

  const learnMore2Description = i18n.formatMessage({
    id: "LearnMore.Label1",
    description: "",
    defaultMessage:
      "Multi-chain, your keys — your data, control where your data is stored, control who has access",
  });

  const learnMore = i18n.formatMessage({
    id: "HomeView.LearnMore",
    description: "",
    defaultMessage: "Learn More",
  });

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
      variants={{
        hidden: {
          y: 80,
          opacity: 0,
        },
        visible: {
          y: 0,
          opacity: 100,
        },
      }}
      transition={{ duration: 0.8 }}
      className="grid grid-cols-1 gap-8 py-40 lg:grid-cols-2"
    >
      <ContentBox
        title={learnMore1Label}
        description={learnMore1Description}
        className="bg-[linear-gradient(225deg,#f9c17a,#af3a6d)] p-2 !pb-16 !text-left sm:px-10"
        logoImageUrl={BracketsIcon}
      >
        <a
          href="https://developers.verida.network/"
          className="mx-6 flex items-center gap-2 transition-all duration-300 hover:gap-5"
          rel="noreferrer"
          target="_blank"
        >
          <span className="text-base font-semibold">{learnMore}</span>
          <img src={ArrowLeftIcon} alt={``} className="brightness-[1000]" />
        </a>
      </ContentBox>

      <ContentBox
        title={learnMore2Label}
        description={learnMore2Description}
        className="bg-[linear-gradient(225deg,#0dd7b2,#265293)] p-2 !pb-8 !pt-8 !text-left sm:px-10 sm:!pb-16 sm:!pt-16"
        logoImageUrl={BlockchainIcon}
      >
        <a
          href="https://www.verida.network/"
          className="mx-6 flex items-center gap-2 transition-all duration-300 hover:gap-5"
          rel="noreferrer"
          target="_blank"
        >
          <span className="text-base font-semibold">{learnMore}</span>
          <img src={ArrowLeftIcon} alt={``} className="brightness-[1000]" />
        </a>
      </ContentBox>
    </motion.div>
  );
};

export default LearnMore;

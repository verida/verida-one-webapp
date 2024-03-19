import { useIntl } from "react-intl";
import { motion } from "framer-motion";
import ContentBox from "./ContentBox";

const LearnMore = () => {
  const i18n = useIntl();

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
      className="grid grid-cols-2 gap-8 py-40 md:grid-cols-1"
    >
      <ContentBox
        title="Developer-Friendly"
        description="Remix Verida One data in your apps. Access our developer SDKs to get started."
        className="bg-[linear-gradient(225deg,#f9c17a,#af3a6d)] p-16 !pb-16 !text-left"
        logoImageUrl="/brackets-icon.svg"
      >
        <a
          href="https://developers.verida.network/"
          className="flex items-center gap-2 transition-all duration-300 hover:gap-5"
          rel="noreferrer"
          target="_blank"
        >
          <span className="text-base font-semibold">{learnMore}</span>
          <img src="/arrow-left.svg" alt={``} className="brightness-[1000]" />
        </a>
      </ContentBox>

      <ContentBox
        title="Decentralized"
        description="Multi-chain, your keys — your data, control where your data is stored, control who has access"
        className="bg-[linear-gradient(225deg,#0dd7b2,#265293)] p-16 !pb-16 !text-left"
        logoImageUrl="/blockchain-icon.svg"
      >
        <a
          href="https://www.verida.network/"
          className="flex items-center gap-2 transition-all duration-300 hover:gap-5"
          rel="noreferrer"
          target="_blank"
        >
          <span className="text-base font-semibold">{learnMore}</span>
          <img src="/arrow-left.svg" alt={``} className="brightness-[1000]" />
        </a>
      </ContentBox>
    </motion.div>
  );
};

export default LearnMore;

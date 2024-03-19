import { useIntl } from "react-intl";
import { motion } from "framer-motion";

const HeroSection = () => {
  const i18n = useIntl();

  const heroTagLabel = i18n.formatMessage({
    id: "HomeView.Tag",
    description: "",
    defaultMessage: `One Profile For Every "You"`,
  });

  const heroSectionHeading = i18n.formatMessage({
    id: "HomeView.Heading",
    description: "Heading of HomeView Section",
    defaultMessage: "Verida One",
  });

  const heroHeadingDescriptionLabel = i18n.formatMessage({
    id: "HomeView.Description",
    description: "",
    defaultMessage: `All your identities and data in one place. <br/> Decentralized, multi-chain and censorship resistant`,
  });

  const joinTheWaitlistButtonLabel = i18n.formatMessage({
    id: "HomeView.JoinTheWaitlistButtonLabel",
    description: "",
    defaultMessage: "Join the waitlist",
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
      className="flex flex-col"
    >
      <div className="mx-auto mb-3 w-fit rounded-full border border-white/70 px-4 py-2 text-xl">
        {heroTagLabel}
      </div>

      <h1 className="text-center text-9xl font-bold leading-tight sm:text-[88px]">
        {heroSectionHeading}
      </h1>
      <p
        className="mb-6 text-center text-2xl text-white/70"
        dangerouslySetInnerHTML={{ __html: heroHeadingDescriptionLabel }}
      ></p>

      <div className="mx-auto overflow-hidden rounded-xl border-[3px] border-white/50">
        <button className="mx-auto bg-[#efefef] px-10 py-3 text-base font-semibold text-background xs:px-4">
          {joinTheWaitlistButtonLabel}
        </button>
      </div>
    </motion.div>
  );
};

export default HeroSection;

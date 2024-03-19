import { useIntl } from "react-intl";
import { motion } from "framer-motion";

const JoinWaitlist = () => {
  const i18n = useIntl();

  const joinTheVeridaWaitlistTitle = i18n.formatMessage({
    id: "HomeView.JoinWaitlistTitle",
    description: "",
    defaultMessage: "Join the Verida One waitlist",
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
      className="!mt-40 flex flex-col"
    >
      <h2 className="mb-4 text-center text-[59px] font-bold leading-tight md:text-[49px]">
        {joinTheVeridaWaitlistTitle}
      </h2>

      <div className="mx-auto overflow-hidden rounded-xl border-[3px] border-white/50">
        <button className="xs:px-4 mx-auto bg-[#efefef] px-10 py-3 text-base font-semibold text-background ">
          {joinTheWaitlistButtonLabel}
        </button>
      </div>
    </motion.div>
  );
};

export default JoinWaitlist;

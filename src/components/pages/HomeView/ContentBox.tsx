import { motion } from "framer-motion";
import cx from "classnames";

interface ContentBoxProps extends React.PropsWithChildren {
  title?: string;
  description?: string;
  logoImageUrl?: string;
  mainImageUrl?: string;
  className?: string;
  mainImageClassName?: string;
}

const ContentBox: React.FC<ContentBoxProps> = (props) => {
  const {
    children,
    title,
    description,
    mainImageUrl,
    logoImageUrl,
    className,
    mainImageClassName,
  } = props;

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
      className={cx(
        "relative flex w-full flex-col justify-between overflow-hidden rounded-[48px] border border-white/40 pb-0 pt-[56px] text-center",
        className
      )}
    >
      {!!logoImageUrl && (
        <div className="mb-6 h-20 w-20 rounded-xl border border-white/60 bg-[linear-gradient(rgba(255,255,255,.2),rgba(255,255,255,.1))] p-3">
          <img src={logoImageUrl} alt={``} />
        </div>
      )}
      <h3 className="mb-3 text-[34px] font-bold leading-tight">{title}</h3>
      <span className="mb-6 block text-xl">{description}</span>
      <img
        src={mainImageUrl}
        alt={``}
        className={cx("relative z-[10] mx-auto max-w-full", mainImageClassName)}
      />
      {children}
    </motion.div>
  );
};

export default ContentBox;

import { useIntl } from "react-intl";
import ContentBox from "../molecules/ContentBox";
import ShowcasePhoneP from "../../assets/images/showcase-phones-p.webp";
import ShowcaseCardTopRightMin from "../../assets/images/showcase-card-top-right-min.png";
import ShowcaseCardLeftMin from "../../assets/images/showcase-card-left-min.png";
import ShowcaseCardBottomRightMin from "../../assets/images/showcase-card-bottom-right-min.png";
import ShareImageP from "../../assets/images/share-image-p.png";
import FeedImageP from "../../assets/images/feed-image-p-2000.webp";
import GitHubMin from "../../assets/images/github-min.png";
import InstagramMin from "../../assets/images/insta-min.png";
import PublicMinP from "../../assets/images/public-min-p.png";
import PubLockMin from "../../assets/images/pub-lock-min.png";
import PubPersonMin from "../../assets/images/pub-person-min.png";
import RepMin from "../../assets/images/rep-min.png";
import Star from "../../assets/images/Star.png";
import Subtract1Min from "../../assets/images/Subtract-1-min.png";
import Subtract2Min from "../../assets/images/Subtract-2-min.png";
import TickP from "../../assets/images/tick-p.png";
import TwitterMin from "../../assets/images/twitter-min.png";
import Vector from "../../assets/images/Vector.png";
import Vector1 from "../../assets/images/Vector-1.png";
import IdentityImageMinP from "../../assets/images/identity-image-min-p-800.png";

const Showcase = () => {
  const i18n = useIntl();

  const showcaseBoxLabel = i18n.formatMessage({
    id: "ShowCase.Label",
    description: "",
    defaultMessage: "Showcase yourself",
  });

  const showcaseBoxDescription = i18n.formatMessage({
    id: "ShowCase.Description",
    description: "",
    defaultMessage: "One place, One URL",
  });

  return (
    <>
      <ContentBox
        title={showcaseBoxLabel}
        description={showcaseBoxDescription}
        mainImageUrl={ShowcasePhoneP}
        className="bg-[linear-gradient(45deg,#7549f2,#de53f7)]"
        mainImageClassName="w-[800px]"
      >
        <img
          src={ShowcaseCardTopRightMin}
          alt={``}
          className="absolute right-0 top-[6%] hidden w-[174px] sm:block"
          style={{
            transform:
              "translate3d(0px,-48.767px,0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg,0deg)",
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
        />
        <img
          src={ShowcaseCardLeftMin}
          alt={``}
          className="absolute left-0 top-[15%] hidden w-[213px] sm:block"
          style={{
            transform:
              "translate3d(0px, 45.517px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
        />
        <img
          src={ShowcaseCardBottomRightMin}
          alt={``}
          className="absolute bottom-0 right-0 hidden w-[225px] sm:block"
          style={{
            transform:
              "translate3d(0px,-48.767px,0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg,0deg)",
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
        />
      </ContentBox>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <ContentBox
          title="Unlock your reputation"
          description="With verified on-chain proofs"
          mainImageUrl={ShareImageP}
          className="bg-[linear-gradient(227deg,#fbcb50,#d87297,#e36658)]"
        >
          <img
            src={Vector}
            alt={``}
            className="absolute bottom-[6%] right-0 hidden w-36 sm:block"
            style={{
              transform:
                "translate3d(0px, -54.211px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
          />
          <img
            src={Vector1}
            alt={``}
            className="absolute left-[5%] top-[31%] hidden w-36 sm:block"
            style={{
              transform:
                "translate3d(0px, 54.211px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
          />
        </ContentBox>

        <ContentBox
          title="Unlock your reputation"
          description="With verified on-chain proofs"
          mainImageUrl={PublicMinP}
          className="bg-[linear-gradient(227deg,#3fdabe,#5385d1)]"
        >
          <img
            src={PubLockMin}
            alt={``}
            className="absolute bottom-[21%] left-0 hidden w-36 sm:block"
            style={{
              transform:
                "translate3d(0px, -54.211px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
          />
          <img
            src={PubPersonMin}
            alt={``}
            className="absolute right-0 top-[21%] hidden w-36 sm:block"
            style={{
              transform:
                "translate3d(0px, 54.211px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
          />
        </ContentBox>
      </div>

      <ContentBox
        title="Curate your content"
        description="One feed, many sources"
        mainImageUrl={FeedImageP}
        className="bg-[linear-gradient(#7677ec,#5354d1)]"
      >
        <img
          src={TwitterMin}
          alt={``}
          className="absolute left-[5%] top-[6%] hidden w-36 sm:block"
          style={{
            transform:
              "translate3d(0px, 47.759px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
        />
        <img
          src={InstagramMin}
          alt={``}
          className="absolute right-[1%] top-[1%] hidden w-36 sm:block"
          style={{
            transform:
              "translate3d(0px, 52.241px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
        />
        <img
          src={GitHubMin}
          alt={``}
          className="absolute bottom-[11%] left-[0%] hidden w-36 sm:block"
          style={{
            transform:
              "translate3d(0px, -47.759px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
        />
      </ContentBox>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <ContentBox
          title="Unlock your reputation"
          description="With verified on-chain proofs"
          mainImageUrl={RepMin}
          className="bg-[linear-gradient(37deg,#76c38f,#60cf8c,#a7c12c)]"
        >
          <img
            src={TickP}
            alt={``}
            className="absolute right-[-21%] top-[7%] hidden w-[266px] sm:block"
            style={{
              transform:
                "translate3d(0px, 48.816px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
          />
          <img
            src={Star}
            alt={``}
            className="absolute bottom-0 left-0 hidden w-[163px] sm:block"
            style={{
              transform:
                "translate3d(0px, -51.184px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
          />
        </ContentBox>
        <ContentBox
          title="Create multiple identities"
          description="Manage and separate your work, personal, and anonymous identities"
          mainImageUrl={IdentityImageMinP}
          className="bg-[linear-gradient(#7677ec,#5354d1)]"
        >
          <img
            src={Subtract1Min}
            alt={``}
            className="absolute right-0 top-[20%] hidden w-[161px] sm:block"
            style={{
              transform:
                "translate3d(0px, 48.816px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
          />
          <img
            src={Subtract2Min}
            alt={``}
            className="absolute bottom-[2%] left-[18.5px] hidden w-[161px] sm:block"
            style={{
              transform:
                "translate3d(0px, -137.661px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
          />
        </ContentBox>
      </div>
    </>
  );
};

export default Showcase;

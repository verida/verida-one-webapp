import { useIntl } from "react-intl";
import ContentBox from "./ContentBox";

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
        mainImageUrl="/showcase-phones-p.webp"
        className="bg-[linear-gradient(45deg,#7549f2,#de53f7)]"
        mainImageClassName="w-[800px]"
      >
        <img
          src="/showcase-card-top right-min.png"
          alt={``}
          className="absolute right-0 top-[6%] w-[174px] md:hidden"
          style={{
            transform:
              "translate3d(0px,-48.767px,0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg,0deg)",
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
        />
        <img
          src="/showcase-card-left-min.png"
          alt={``}
          className="absolute left-0 top-[15%] w-[213px] md:hidden"
          style={{
            transform:
              "translate3d(0px, 45.517px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
        />
        <img
          src="/showcase-card-bottom-right-min.png"
          alt={``}
          className="absolute bottom-0 right-0 w-[225px] md:hidden"
          style={{
            transform:
              "translate3d(0px,-48.767px,0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg,0deg)",
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
        />
      </ContentBox>

      <div className="grid grid-cols-2 gap-8 md:grid-cols-1">
        <ContentBox
          title="Unlock your reputation"
          description="With verified on-chain proofs"
          mainImageUrl="/share-image-p.png"
          className="bg-[linear-gradient(227deg,#fbcb50,#d87297,#e36658)]"
        >
          <img
            src="/Vector.png"
            alt={``}
            className="absolute bottom-[6%] right-0 w-[144px] sm:hidden"
            style={{
              transform:
                "translate3d(0px, -54.211px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
          />
          <img
            src="/Vector-1.png"
            alt={``}
            className="absolute left-[5%] top-[31%] w-[144px] sm:hidden"
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
          mainImageUrl="/public-min-p.png"
          className="bg-[linear-gradient(227deg,#3fdabe,#5385d1)]"
        >
          <img
            src="/pub-lock-min.png"
            alt={``}
            className="absolute bottom-[21%] left-0 w-[144px] sm:hidden"
            style={{
              transform:
                "translate3d(0px, -54.211px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
          />
          <img
            src="/pub-person-min.png"
            alt={``}
            className="absolute right-0 top-[21%] w-[144px] sm:hidden"
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
        mainImageUrl="/feed-image-p-2000.webp"
        className="bg-[linear-gradient(#7677ec,#5354d1)]"
      >
        <img
          src="/twitter-min.png"
          alt={``}
          className="absolute left-[5%] top-[6%] w-[144px] sm:hidden"
          style={{
            transform:
              "translate3d(0px, 47.759px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
        />
        <img
          src="/insta-min.png"
          alt={``}
          className="absolute right-[1%] top-[1%] w-[144px] sm:hidden"
          style={{
            transform:
              "translate3d(0px, 52.241px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
        />
        <img
          src="/github-min.png"
          alt={``}
          className="absolute bottom-[11%] left-[0%] w-[144px] md:hidden"
          style={{
            transform:
              "translate3d(0px, -47.759px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
        />
      </ContentBox>

      <div className="grid grid-cols-2 gap-8 md:grid-cols-1">
        <ContentBox
          title="Unlock your reputation"
          description="With verified on-chain proofs"
          mainImageUrl="/rep-min.png"
          className="bg-[linear-gradient(37deg,#76c38f,#60cf8c,#a7c12c)]"
        >
          <img
            src="/tick-p.png"
            alt={``}
            className="absolute right-[-21%] top-[7%] w-[266px] sm:hidden"
            style={{
              transform:
                "translate3d(0px, 48.816px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
          />
          <img
            src="/Star.png"
            alt={``}
            className="absolute bottom-0 left-0 w-[163px] sm:hidden"
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
          mainImageUrl="/identity-image-min-p-800.png"
          className="bg-[linear-gradient(#7677ec,#5354d1)]"
        >
          <img
            src="/Subtract-1-min.png"
            alt={``}
            className="absolute right-0 top-[20%] w-[161px] sm:hidden"
            style={{
              transform:
                "translate3d(0px, 48.816px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
          />
          <img
            src="/Subtract-2-min.png"
            alt={``}
            className="absolute bottom-[2%] left-[18.5px] w-[161px] sm:hidden"
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

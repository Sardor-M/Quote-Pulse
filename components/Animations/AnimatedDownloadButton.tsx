import React from "react";
import Image from "next/image";

import lottieJson from "../../assets/animated-photo.json";
import {
  CenteredLottie,
  DownloadQuoteCardContainer,
  DownloadQuoteCardContext,
} from "./AnimationElement";

const AnimatedDownloadButton = () => {
  return (
    <DownloadQuoteCardContainer onClick={null}>
      <CenteredLottie loop animationData={lottieJson} play />
      <DownloadQuoteCardContext>
        Download your quote card
      </DownloadQuoteCardContext>
    </DownloadQuoteCardContainer>
  );
};

export default AnimatedDownloadButton;

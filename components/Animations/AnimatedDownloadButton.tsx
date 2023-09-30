import React from "react";
import Image from "next/image";

import lottieJson from "../../assets/animated-photo.json";
import {
  CenteredLottie,
  DownloadQuoteCardContainer,
  DownloadQuoteCardContext,
} from "./AnimationElement";

interface AnimatedDownloadButtonProps {
  handleDownload: () => void;
}

const AnimatedDownloadButton = ({
  handleDownload,
}: AnimatedDownloadButtonProps) => {
  return (
    <DownloadQuoteCardContainer onClick={handleDownload}>
      <CenteredLottie loop animationData={lottieJson} play />
      <DownloadQuoteCardContext>
        Download your quote card
      </DownloadQuoteCardContext>
    </DownloadQuoteCardContainer>
  );
};

export default AnimatedDownloadButton;

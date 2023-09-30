import { Backdrop, Fade, Modal } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import {
  ModalCircularProgress,
  QuoteGeneratorInnerContainer,
  QuoteGeneratorModalContainer,
  QuoteGeneratorSubtitle,
  QuoteGeneratorTitle,
} from "./QuoteGeneratorElem";
import ImageBlob from "../Animations/ImageBlob";
import AnimatedDownloadButton from "../Animations/AnimatedDownloadButton";
import { ImageBlobContainer } from "../Animations/AnimationElement";

interface QuoteGeneratorProps {
  open: boolean;
  close: () => void;
  processingQuote: boolean;
  setProcessingQuote: React.Dispatch<React.SetStateAction<boolean>>;
  quoteReceived: String | null;
  setQuoteReceived: React.Dispatch<React.SetStateAction<String | null>>;
}

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const QuoteGeneratorModal = ({
  open,
  close,
  processingQuote,
  setProcessingQuote,
  quoteReceived,
  setQuoteReceived,
}: QuoteGeneratorProps) => {
  const wiseQuote = '"The best way to predict the future is to create it."';
  const wiseQuoteAuthor = "by Me :)";

  const [blobUrl, setBlobUrl] = useState<string | null>(null);

  // function for handling the download of the quote
  const handleDownload = () => {
    const link = document.createElement("a");
    if (typeof blobUrl === "string") {
      link.href = blobUrl;
      link.download = "quote.png";
      link.click();
    }
  };

  // function for receiving the quote
  useEffect(() => {
    if (quoteReceived) {
      const binaryData = Buffer.from(quoteReceived, "base64");
      const blob = new Blob([binaryData], { type: "image/png" });
      const blobUrlGenerated = URL.createObjectURL(blob);
      console.log(blobUrlGenerated);
      setBlobUrl(blobUrlGenerated);

      // removing the old blob URL each time new one is generated
      return () => {
        URL.revokeObjectURL(blobUrlGenerated);
      };
    }
  }, [quoteReceived]);

  return (
    <Modal
      id="QuoteGeneratorModal"
      aria-labelledby="spring-modal-quotegenmodal"
      aria-describedby="spring-modal-openandclose-quotegenerator"
      open={open}
      onClose={close}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <QuoteGeneratorModalContainer sx={style}>
          <QuoteGeneratorInnerContainer>
            {/*Process the request of the quote */}
            {processingQuote === true && quoteReceived === null && (
              <>
                <ModalCircularProgress size={"8rem"} />
                <QuoteGeneratorTitle>Create your quote</QuoteGeneratorTitle>
                <QuoteGeneratorSubtitle style={{ marginTop: "20px" }}>
                  {wiseQuote}
                  <br></br>
                  <span style={{ fontSize: 26 }}>{wiseQuoteAuthor}</span>
                </QuoteGeneratorSubtitle>
              </>
            )}
            {/* Quote state received */}
            {quoteReceived !== null && (
              <>
                <QuoteGeneratorTitle>Download your quote</QuoteGeneratorTitle>
                <QuoteGeneratorSubtitle style={{ marginTop: "20px" }}>
                  See a preview:
                </QuoteGeneratorSubtitle>
                <ImageBlobContainer>
                  <ImageBlob quoteReceived={quoteReceived} blobUrl={blobUrl} />
                </ImageBlobContainer>
                <AnimatedDownloadButton handleDownload={handleDownload} />
              </>
            )}
          </QuoteGeneratorInnerContainer>
        </QuoteGeneratorModalContainer>
      </Fade>
    </Modal>
  );
};

export default QuoteGeneratorModal;
